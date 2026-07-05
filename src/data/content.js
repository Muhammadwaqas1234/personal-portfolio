// All portfolio content sourced from Muhammad Waqas's CV.
// Edit values here — components read from this file.

const base = import.meta.env.BASE_URL // '/personal-portfolio/'
export const img = (name) => `${base}images/${name}`

export const profile = {
  name: 'Muhammad Waqas',
  role: 'AI Engineer',
  location: 'Islamabad, Pakistan',
  email: 'raiwaqasabid@gmail.com',
  phone: '+92 309 0247947',
  whatsapp: 'https://wa.me/923090247947',
  github: 'https://github.com/Muhammadwaqas1234',
  githubHandle: 'Muhammadwaqas1234',
  linkedin: 'https://www.linkedin.com/in/muhammad-waqas-111a68212',
  photo: img('waqas.jpg'),
  typedRoles: [
    'Agentic AI Systems',
    'RAG Pipelines',
    'Multi-Agent Architectures',
    'Production AI Services',
  ],
  tagline:
    'AI Engineer specializing in Agentic AI and Retrieval-Augmented Generation (RAG). I design multi-agent systems that reduce hallucinations, sharpen retrieval accuracy, and scale production-grade intelligent pipelines for real-world applications.',
}

export const stats = [
  { value: 6, suffix: '', label: 'Production Projects' },
  { value: 100, suffix: '+', label: 'Docs Indexed (RAG)' },
  { value: 94, suffix: '%', label: 'Face-Auth Accuracy' },
  { value: 9, suffix: '', label: 'Certifications' },
]

export const about = {
  heading2: 'AI Engineer · Agentic AI · RAG Systems',
  paragraphs: [
    "I'm an AI Engineer focused on taking language-model systems from prototype to production. I specialise in multi-agent architectures, retrieval-augmented generation, and structured LLM outputs — designing pipelines that stay grounded, measurable, and reliable under real-world load.",
    'At <strong>Techclomate</strong> I delivered end-to-end Agentic AI and RAG systems across multiple client engagements, owning the full stack from embedding design and vector-store configuration through to LLM integration and FastAPI deployment — and built benchmarking tooling to measure Recall@K and hallucination rates across FAISS, Pinecone, and ChromaDB.',
  ],
  cards: [
    { icon: 'fa-graduation-cap', title: 'Education', main: 'MS Artificial Intelligence', sub: 'Air University, Islamabad' },
    { icon: 'fa-briefcase', title: 'Experience', main: 'AI Engineer', sub: 'Techclomate' },
  ],
}

export const skills = [
  {
    icon: 'fa-robot',
    title: 'Agentic AI & Multi-Agent',
    desc: 'Multi-agent orchestration, tool-augmented agents, agent chaining, memory-backed reasoning, structured LLM outputs.',
    tags: ['LangChain', 'LlamaIndex', 'Agent Chaining'],
  },
  {
    icon: 'fa-database',
    title: 'Retrieval-Augmented Generation',
    desc: 'Dense embeddings, semantic chunking, similarity search, Recall@K optimization, hallucination reduction.',
    tags: ['FAISS', 'Pinecone', 'ChromaDB'],
  },
  {
    icon: 'fa-brain',
    title: 'Large Language Models',
    desc: 'LLM integration, prompt engineering, output validation, retrieval-enhanced generation, grounding.',
    tags: ['OpenAI', 'Claude', 'HuggingFace'],
  },
  {
    icon: 'fa-server',
    title: 'Backend & APIs',
    desc: 'High-performance async APIs, AI microservices, Pydantic validation, error-resilient response formatting.',
    tags: ['FastAPI', 'Python', 'REST'],
  },
  {
    icon: 'fa-eye',
    title: 'ML & Computer Vision',
    desc: 'Embedding pipelines, face verification, model deployment, similarity matching at scale.',
    tags: ['TensorFlow', 'FaceNet', 'Scikit-learn'],
  },
  {
    icon: 'fa-chess-knight',
    title: 'Deep Reinforcement Learning',
    desc: 'Deep Q-Networks, Policy Gradients, Actor-Critic methods, continuous action spaces, self-play, and multi-agent RL.',
    tags: ['PyTorch', 'DQN', 'Actor-Critic'],
  },
  {
    icon: 'fa-microphone-lines',
    title: 'Realtime Voice AI',
    desc: 'Streaming STT→LLM→TTS voice pipelines with sub-second turn-taking and natural barge-in.',
    tags: ['LiveKit', 'Deepgram', 'Cartesia'],
  },
]

export const projects = [
  {
    badge: 'SaaS',
    title: 'Multi-Shops AI Voice Receptionist',
    desc: 'Real-time AI call assistant for auto-repair shops — streaming Deepgram STT, Claude reasoning, and Cartesia TTS on LiveKit with sub-second turn-taking, multi-tenant routing, and a secure click-to-talk widget.',
    tags: ['LiveKit', 'Claude', 'Twilio', 'FastAPI'],
  },
  {
    badge: 'RAG',
    title: 'Construction RAG System',
    desc: 'Production RAG indexing 100+ construction documents with FAISS for low-latency semantic retrieval. Improved Recall@K via semantic chunking and multi-stage reranking; enforced strict context grounding to cut hallucinations.',
    tags: ['FAISS', 'Pinecone', 'HuggingFace'],
  },
  {
    badge: 'Multi-Agent',
    title: 'Multi-Agent GitHub Analyzer',
    desc: 'Autonomous multi-agent system that analyzes GitHub repositories — orchestrating sub-agents for parsing, summarization, and quality scoring. Parallel execution and intelligent routing handle codebases at scale.',
    tags: ['LangChain', 'FAISS', 'RAG'],
  },
  {
    badge: 'CV',
    title: 'AI Face Authentication System',
    desc: 'Real-time face verification at 94%+ accuracy using FaceNet embeddings and cosine similarity against an enrolled identity database. FastAPI endpoints serve concurrent validation requests without degradation.',
    tags: ['TensorFlow', 'FaceNet', 'FastAPI'],
  },
  {
    badge: 'Prototype',
    title: 'Numo — Maternal Nutrition Platform',
    desc: 'AI-powered platform delivering personalized nutrition guidance and evidence-based health calculators for pregnancy and breastfeeding, with RAG integration to ground responses in verified nutritional sources.',
    tags: ['JavaScript', 'FastAPI', 'OpenAI'],
  },
  {
    badge: 'Tooling',
    title: 'RAG Benchmarking Suite',
    desc: 'Internal tooling measuring Recall@K, embedding quality, and hallucination rates across FAISS, Pinecone, and ChromaDB backends — informing architecture decisions on live client projects.',
    tags: ['FAISS', 'Pinecone', 'ChromaDB'],
  },
]

export const certifications = [
  {
    image: img('cert-rag.jpg'),
    title: 'Building a RAG Solution from Scratch',
    issuer: 'LinkedIn Learning',
    verifyUrl: 'https://www.linkedin.com/learning/building-a-rag-solution-from-scratch',
  },
  {
    image: img('cert-agentic.jpg'),
    title: 'Agentic AI for Developers: Concepts & Application for Enterprises',
    issuer: 'LinkedIn Learning',
    verifyUrl: 'https://www.linkedin.com/learning/agentic-ai-for-developers-concepts-and-application-for-enterprises',
  },
  {
    image: img('cert-appsec.jpg'),
    title: 'Artificial Intelligence and Application Security',
    issuer: 'LinkedIn Learning',
    verifyUrl: 'https://www.linkedin.com/learning/certificates/886a6190bfe0ea8b427330623775f3ef6a4eebdd12d774f31e32f5c6b7c12581',
  },
  {
    image: img('cert-data.jpg'),
    title: 'Data Analytics & Business Intelligence',
    issuer: 'DigiSkills · Virtual University',
    verifyUrl: 'https://digiskills.pk/verify',
  },
  {
    title: 'Deep Reinforcement Learning Hands-On (Specialization)',
    issuer: 'Packt · Coursera',
    verifyUrl: 'https://coursera.org/verify/specialization/1PMG8C1MO3OY',
  },
  {
    title: 'Foundations of Deep Reinforcement Learning with PyTorch',
    issuer: 'Packt · Coursera',
    verifyUrl: 'https://coursera.org/verify/2C9IP7TUK3WB',
  },
  {
    title: 'Advanced Deep RL Algorithms and Applications',
    issuer: 'Packt · Coursera',
    verifyUrl: 'https://coursera.org/verify/VGXR5C8YJALF',
  },
  {
    title: 'Cutting-Edge Topics in Deep Reinforcement Learning',
    issuer: 'Packt · Coursera',
    verifyUrl: 'https://coursera.org/verify/TWQHY2V7VB45',
  },
  {
    title: 'PowerBI Report Development Crash Course',
    issuer: 'Coursera Guided Project',
    verifyUrl: 'https://coursera.org/verify/2E7LK66TS3WT',
  },
]
