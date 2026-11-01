"use client";
import { apiUrl } from "@/lib/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "", description: "", techStack: "", github: "", demo: "", image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(apiUrl("api/projects"));
      const data = await res.json();
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        console.error("Expected array but got:", data);
        setProjects([]);
      }
    } catch (err) {
      toast.error("Failed to fetch projects");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("techStack", formData.techStack);
    data.append("github", formData.github);
    data.append("demo", formData.demo);
    if (formData.image) data.append("image", formData.image);

    try {
      const url = editingId ? apiUrl(`api/projects/${editingId}`) : apiUrl("api/projects");
      const method = editingId ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        body: data
      });
      
      if (res.ok) {
        toast.success(editingId ? "Project updated successfully" : "Project added successfully");
        fetchProjects();
        setFormData({ title: "", description: "", techStack: "", github: "", demo: "", image: null });
        setEditingId(null);
        e.target.reset(); // Reset file input
      } else {
        toast.error(editingId ? "Failed to update project" : "Failed to add project");
      }
    } catch (err) {
      toast.error("Server error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(apiUrl(`api/projects/${id}`), { method: "DELETE" });
      if (res.ok) {
        toast.success("Project deleted");
        fetchProjects();
      } else {
        toast.error("Failed to delete");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title || "",
      description: project.description || "",
      techStack: project.techStack ? project.techStack.join(", ") : "",
      github: project.github || "",
      demo: project.demo || "",
      image: null // user has to re-upload image if they want to change it
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-8">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-6">{editingId ? "Edit Project" : "Add New Project"}</h2>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input type="text" name="title" placeholder="Project Title" required value={formData.title} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
            <input type="text" name="techStack" placeholder="Tech Stack (comma separated)" value={formData.techStack} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
            <input type="text" name="github" placeholder="GitHub Link(s) (comma-separated for Frontend / Backend)" value={formData.github} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
            <input type="url" name="demo" placeholder="Demo Link" value={formData.demo} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500" />
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500/10 file:text-blue-500 hover:file:bg-blue-500/20" required={!editingId} />
          </div>
          <div className="space-y-4 flex flex-col">
            <textarea name="description" placeholder="Description" required value={formData.description} onChange={handleChange} className="w-full flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 resize-none min-h-[150px]"></textarea>
            <div className="flex space-x-4">
              <button type="submit" disabled={isSubmitting} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-70">
                {isSubmitting ? "Saving..." : editingId ? "Update Project" : "Add Project"}
              </button>
              {editingId && (
                <button type="button" onClick={() => { setEditingId(null); setFormData({ title: "", description: "", techStack: "", github: "", demo: "", image: null }); }} className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 rounded-lg transition-colors">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl overflow-hidden">
        <h2 className="text-xl font-bold text-white mb-6">Manage Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project._id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden flex flex-col">
              <div className="w-full h-40 bg-slate-900/80 flex items-center justify-center p-2 border-b border-slate-700">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image ? apiUrl(project.image.replace(/\\/g, '/')) : '/placeholder.png'} 
                  alt={project.title} 
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/placeholder.png';
                  }}
                  className="max-w-full max-h-full object-contain drop-shadow-sm" 
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white truncate">{project.title}</h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2 flex-1">{project.description}</p>
                <div className="mt-4 flex space-x-2">
                  <button onClick={() => handleEdit(project)} className="flex-1 flex items-center justify-center space-x-2 py-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-colors">
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button onClick={() => handleDelete(project._id)} className="flex-1 flex items-center justify-center space-x-2 py-2 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white rounded-lg transition-colors">
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
