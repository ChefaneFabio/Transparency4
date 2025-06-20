import React, { useState } from 'react';
import { Search, Upload, Star, Eye, Bookmark, Play, FileText, Code, Award, MapPin, Clock, Euro, Users, TrendingUp, Filter, Bell, User, Building2, GraduationCap, Briefcase, Zap, Globe, Shield, Brain, Trophy, Target, Headphones, Calendar } from 'lucide-react';

const TransparencyInterface = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [selectedProject, setSelectedProject] = useState(null);

  const studentProjects = [
    {
      id: 1,
      title: "AI Mental Health Chatbot",
      student: "Marco Rossi",
      university: "Università di Milano",
      degree: "Computer Science",
      views: 234,
      bookmarks: 18,
      skills: ["Python", "TensorFlow", "NLP", "Psychology"],
      description: "Chatbot AI per supporto psicologico con analisi sentiment",
      videoDemo: true,
      githubLink: true,
      thesis: true,
      match: 94
    },
    {
      id: 2,
      title: "Blockchain Supply Chain",
      student: "Sofia Chen",
      university: "Politecnico di Milano",
      degree: "Engineering",
      views: 156,
      bookmarks: 23,
      skills: ["Solidity", "React", "Node.js", "Logistics"],
      description: "Sistema tracciabilità prodotti con smart contracts",
      videoDemo: true,
      githubLink: true,
      thesis: false,
      match: 87
    },
    {
      id: 3,
      title: "Sustainable Fashion Analytics",
      student: "Elena Verde",
      university: "Bocconi",
      degree: "Economics",
      views: 89,
      bookmarks: 12,
      skills: ["Data Analysis", "Sustainability", "R", "Business Strategy"],
      description: "Analisi impatto ambientale industria moda",
      videoDemo: false,
      githubLink: false,
      thesis: true,
      match: 76
    }
  ];

  const jobPostings = [
    {
      id: 1,
      company: "TechCorp Italia",
      title: "Full-Stack Developer",
      salary: "€35,000 - €45,000",
      location: "Milano",
      type: "Project-Based",
      description: "Cerchiamo chi sa creare app banking mobile",
      requiredSkills: ["React", "Node.js", "Python"],
      matches: 12,
      posted: "2 giorni fa",
      vrPreview: true,
      aiInsights: "92% skill match con progetti simili"
    },
    {
      id: 2,
      company: "GreenStart",
      title: "Sustainability Analyst",
      salary: "€28,000 - €38,000",
      location: "Roma",
      type: "Challenge",
      description: "Risolvi: Come ridurre del 30% l'impatto CO2?",
      requiredSkills: ["Data Analysis", "Sustainability", "Excel"],
      matches: 5,
      posted: "1 settimana fa",
      deadline: "5 giorni",
      prize: "€2,000 + Job Offer"
    },
    {
      id: 3,
      company: "UniMilano x InnovateCorp",
      title: "AI Research Partnership",
      salary: "€30,000 - €40,000",
      location: "Milano",
      type: "Partnership Project",
      description: "Tesi co-finanziata: Machine Learning per diagnostica medica",
      requiredSkills: ["Machine Learning", "Python", "Medical Data"],
      matches: 3,
      posted: "3 giorni fa",
      partnership: true,
      duration: "6 mesi tesi + 12 mesi contratto"
    }
  ];

  const StudentDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ciao Marco! 👋</h2>
            <p className="opacity-90">Il tuo portfolio ha 234 visualizzazioni questa settimana</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">94%</div>
            <div className="text-sm opacity-90">Match Score Medio</div>
          </div>
        </div>
      </div>

      {/* Advanced Features Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 p-4 rounded-lg">
          <Brain className="text-purple-600 mb-2" size={24} />
          <div className="font-semibold text-purple-800 text-sm">Neural Skill Mapping</div>
          <div className="text-xs text-purple-600">Hidden talents detected</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 p-4 rounded-lg">
          <Shield className="text-green-600 mb-2" size={24} />
          <div className="font-semibold text-green-800 text-sm">Blockchain Verified</div>
          <div className="text-xs text-green-600">Immutable credentials</div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-4 rounded-lg">
          <Globe className="text-blue-600 mb-2" size={24} />
          <div className="font-semibold text-blue-800 text-sm">VR Job Preview</div>
          <div className="text-xs text-blue-600">Immersive workplace</div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 p-4 rounded-lg">
          <Zap className="text-orange-600 mb-2" size={24} />
          <div className="font-semibold text-orange-800 text-sm">AI Career Coach</div>
          <div className="text-xs text-orange-600">Personalized guidance</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-white border-2 border-dashed border-blue-300 p-6 rounded-lg text-center hover:border-blue-500 transition-colors">
          <Upload className="mx-auto mb-2 text-blue-500" size={32} />
          <div className="font-semibold">Carica Nuovo Progetto</div>
          <div className="text-sm text-gray-600">Video, GitHub, Paper</div>
        </button>
        
        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <TrendingUp className="text-green-600 mb-2" size={32} />
          <div className="font-semibold text-green-800">3 Nuovi Match</div>
          <div className="text-sm text-green-600">Aziende interessate</div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <Award className="text-purple-600 mb-2" size={32} />
          <div className="font-semibold text-purple-800">Skill Verificate</div>
          <div className="text-sm text-purple-600">Blockchain certified</div>
        </div>
      </div>

      {/* Live Challenges */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Trophy className="text-orange-600" size={28} />
            <div>
              <h3 className="font-bold text-orange-800">Challenge Attive</h3>
              <p className="text-sm text-orange-600">Partecipa e vinci opportunità di lavoro</p>
            </div>
          </div>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            🔥 5 giorni rimasti
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">GreenStart CO2 Challenge</h4>
            <p className="text-sm text-gray-600 mb-3">Riduci del 30% l'impatto ambientale di un'azienda fashion</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-green-600 font-semibold">Premio: €2,000 + Job Offer</span>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-700">
                Partecipa
              </button>
            </div>
          </div>
          
          <div className="bg-white border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold mb-2">AI Medical Diagnostics</h4>
            <p className="text-sm text-gray-600 mb-3">Migliora l'accuratezza diagnostica con ML</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-blue-600 font-semibold">Partnership: UniMilano</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Scopri
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* I Tuoi Progetti */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold">I Tuoi Progetti</h3>
        </div>
        <div className="p-6 space-y-4">
          {studentProjects.slice(0,2).map(project => (
            <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-lg">{project.title}</h4>
                <div className="flex gap-2 text-sm text-gray-600">
                  <span className="flex items-center gap-1"><Eye size={16} />{project.views}</span>
                  <span className="flex items-center gap-1"><Bookmark size={16} />{project.bookmarks}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.skills.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{skill}</span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {project.videoDemo && <span className="flex items-center gap-1 text-sm text-green-600"><Play size={16} />Video Demo</span>}
                  {project.githubLink && <span className="flex items-center gap-1 text-sm text-purple-600"><Code size={16} />GitHub</span>}
                  {project.thesis && <span className="flex items-center gap-1 text-sm text-orange-600"><FileText size={16} />Tesi</span>}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{project.match}%</div>
                  <div className="text-xs text-gray-500">Match medio</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const CompanyDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">TechCorp Dashboard 🏢</h2>
            <p className="opacity-90">12 nuovi candidati trovati per le tue posizioni</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">€45K</div>
            <div className="text-sm opacity-90">Range Salariale Medio</div>
          </div>
        </div>
      </div>

      {/* AI Analytics & Smart Features */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-purple-600" size={24} />
          <h3 className="text-xl font-semibold">AI Career Intelligence</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <Target className="text-purple-600 mb-2" size={20} />
            <h4 className="font-semibold text-purple-800 mb-1">Skill Gaps Analysis</h4>
            <p className="text-sm text-purple-600">Identificate 3 competenze da sviluppare per +€5K salary</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <TrendingUp className="text-blue-600 mb-2" size={20} />
            <h4 className="font-semibold text-blue-800 mb-1">Market Trends</h4>
            <p className="text-sm text-blue-600">React developers +23% demand questo trimestre</p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <Calendar className="text-green-600 mb-2" size={20} />
            <h4 className="font-semibold text-green-800 mb-1">Career Forecast</h4>
            <p className="text-sm text-green-600">Predizione: Senior Dev entro 18 mesi</p>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Cerca progetti: 'app banking mobile', 'AI chatbot'..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            <Filter size={20} />
            Filtri Smart
          </button>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            <Brain size={20} />
            AI Suggest
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Milano</span>
          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">€35K-45K</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">🔥 High Growth Potential</span>
        </div>
      </div>

      {/* Candidati Suggeriti */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold">Candidati AI-Matched per "Full-Stack Developer"</h3>
        </div>
        <div className="p-6 space-y-4">
          {studentProjects.map(project => (
            <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedProject(project)}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-gray-600">{project.student} • {project.university}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{project.match}%</div>
                  <div className="text-xs text-gray-500">Match Score</div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.skills.map(skill => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{skill}</span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-3">
                  {project.videoDemo && <span className="flex items-center gap-1 text-sm text-green-600"><Play size={16} />Demo</span>}
                  {project.githubLink && <span className="flex items-center gap-1 text-sm text-purple-600"><Code size={16} />Code</span>}
                  <span className="flex items-center gap-1 text-sm text-gray-600"><Eye size={16} />{project.views} views</span>
                  <span className="flex items-center gap-1 text-sm text-blue-600"><Shield size={16} />Verified</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                    <Globe size={14} />
                    VR Preview
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700">
                    Contatta Candidato
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Le Tue Offerte */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-xl font-semibold">Le Tue Offerte Attive</h3>
        </div>
        <div className="p-6 space-y-4">
          {jobPostings.map(job => (
            <div key={job.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold text-lg">{job.title}</h4>
                  <p className="text-gray-600">{job.salary} • {job.location}</p>
                  {job.aiInsights && <p className="text-sm text-blue-600 mt-1">🧠 {job.aiInsights}</p>}
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded text-sm ${
                    job.type === 'Challenge' ? 'bg-orange-100 text-orange-800' :
                    job.type === 'Partnership Project' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {job.type}
                  </span>
                  <div className="text-sm text-gray-500 mt-1">{job.matches} match trovati</div>
                  {job.vrPreview && <div className="text-xs text-purple-600 mt-1">🥽 VR Available</div>}
                </div>
              </div>
              <p className="text-gray-600 mb-3">{job.description}</p>
              {job.deadline && (
                <div className="bg-red-50 border border-red-200 p-2 rounded mb-3">
                  <span className="text-red-800 text-sm font-semibold">⏰ Deadline: {job.deadline} • Premio: {job.prize}</span>
                </div>
              )}
              {job.partnership && (
                <div className="bg-purple-50 border border-purple-200 p-2 rounded mb-3">
                  <span className="text-purple-800 text-sm font-semibold">🤝 Partnership Project • Durata: {job.duration}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {job.requiredSkills.map(skill => (
                    <span key={skill} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{skill}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{job.posted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm border-b mb-8">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">TRANSPARENCY</h1>
          </div>
          
          {/* Navigation Tabs */}
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('student')}
              className={`px-6 py-2 rounded-md flex items-center gap-2 transition-colors ${
                activeTab === 'student' 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <GraduationCap size={20} />
              Studente
            </button>
            <button 
              onClick={() => setActiveTab('company')}
              className={`px-6 py-2 rounded-md flex items-center gap-2 transition-colors ${
                activeTab === 'company' 
                  ? 'bg-white text-green-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Building2 size={20} />
              Azienda
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <Bell className="text-gray-600" size={24} />
            <User className="text-gray-600" size={24} />
          </div>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'student' ? <StudentDashboard /> : <CompanyDashboard />}

      {/* EU Compliance Banner */}
      <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">🇪🇺 EU Compliance Ready</h3>
            <p className="text-sm opacity-90">Tutte le offerte includono range salariali trasparenti • Direttiva 2026 compliant</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">7 Giugno 2026</div>
            <div className="text-sm opacity-90">Deadline obbligatoria</div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <p className="text-gray-600">{selectedProject.student} • {selectedProject.university}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-green-800">Match Score</span>
                  <span className="text-2xl font-bold text-green-600">{selectedProject.match}%</span>
                </div>
                <p className="text-sm text-green-600 mt-1">Alto match per le competenze richieste</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Descrizione Progetto</h3>
                <p className="text-gray-700">{selectedProject.description}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Skills Verificate</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Materiali Disponibili</h3>
                <div className="space-y-2">
                  {selectedProject.videoDemo && (
                    <div className="flex items-center gap-2 text-green-600">
                      <Play size={16} />
                      <span>Video Demo (2:30 min)</span>
                    </div>
                  )}
                  {selectedProject.githubLink && (
                    <div className="flex items-center gap-2 text-purple-600">
                      <Code size={16} />
                      <span>Repository GitHub</span>
                    </div>
                  )}
                  {selectedProject.thesis && (
                    <div className="flex items-center gap-2 text-orange-600">
                      <FileText size={16} />
                      <span>Estratto Tesi di Laurea</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Contatta Candidato
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Salva Profilo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransparencyInterface;