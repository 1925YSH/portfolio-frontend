"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/contact");
      const data = await res.json();
      if (Array.isArray(data)) {
        setMessages(data);
      } else {
        console.error("Expected array but got:", data);
        setMessages([]);
      }
    } catch (err) {
      toast.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/contact/${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Message deleted");
        setMessages(messages.filter(msg => msg._id !== id));
      } else {
        toast.error("Failed to delete message");
      }
    } catch (err) {
      toast.error("Server error");
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-white mb-6">Contact Messages</h2>
      
      {loading ? (
        <div className="text-center py-8 text-gray-400">Loading...</div>
      ) : messages.length === 0 ? (
        <div className="text-center py-8 text-gray-400 bg-slate-800 rounded-lg">No messages found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="text-xs text-gray-300 uppercase bg-slate-800">
              <tr>
                <th className="px-6 py-3 rounded-tl-lg">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Message</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3 rounded-tr-lg text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white whitespace-nowrap">{msg.name}</td>
                  <td className="px-6 py-4">{msg.email}</td>
                  <td className="px-6 py-4 min-w-[300px]">{msg.message}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{new Date(msg.createdAt).toLocaleString()}</td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleDelete(msg._id)}
                      className="text-red-400 hover:text-white hover:bg-red-500 p-2 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
