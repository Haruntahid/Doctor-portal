import { createContext, useContext, useState, ReactNode } from 'react';
import doctor1 from '@assets/generated_images/Male_doctor_professional_headshot_61e95f15.png';
import doctor2 from '@assets/generated_images/Female_doctor_professional_headshot_ba0e2bf2.png';
import doctor3 from '@assets/generated_images/Young_male_doctor_headshot_cf390350.png';

//todo: remove mock functionality
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  availability: string;
  email: string;
  phone: string;
}

//todo: remove mock functionality
export interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  doctor: string;
  date: string;
  time: string;
  problem: string;
  status: 'pending' | 'confirmed' | 'completed';
}

//todo: remove mock functionality
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

//todo: remove mock functionality
export interface SubAdmin {
  id: string;
  name: string;
  email: string;
  role: string;
}

//todo: remove mock functionality
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

interface AppContextType {
  doctors: Doctor[];
  addDoctor: (doctor: Omit<Doctor, 'id'>) => void;
  deleteDoctor: (id: string) => void;
  updateDoctor: (id: string, doctor: Partial<Doctor>) => void;
  patients: Patient[];
  addPatient: (patient: Omit<Patient, 'id'>) => void;
  updatePatient: (id: string, patient: Partial<Patient>) => void;
  blogPosts: BlogPost[];
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
  subAdmins: SubAdmin[];
  addSubAdmin: (admin: Omit<SubAdmin, 'id'>) => void;
  deleteSubAdmin: (id: string) => void;
  contactInfo: ContactInfo;
  updateContactInfo: (info: ContactInfo) => void;
  currentUser: { role: 'admin' | 'doctor' | null; id: string | null };
  login: (role: 'admin' | 'doctor', id: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

//todo: remove mock functionality - initial dummy data
const initialDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Michael Chen',
    specialization: 'Cardiologist',
    image: doctor1,
    availability: 'Mon-Fri, 9AM-5PM',
    email: 'michael.chen@medicare.com',
    phone: '+1 (555) 123-4567'
  },
  {
    id: '2',
    name: 'Dr. Sarah Williams',
    specialization: 'Pediatrician',
    image: doctor2,
    availability: 'Mon-Sat, 10AM-6PM',
    email: 'sarah.williams@medicare.com',
    phone: '+1 (555) 234-5678'
  },
  {
    id: '3',
    name: 'Dr. James Anderson',
    specialization: 'Neurologist',
    image: doctor3,
    availability: 'Tue-Sat, 8AM-4PM',
    email: 'james.anderson@medicare.com',
    phone: '+1 (555) 345-6789'
  }
];

//todo: remove mock functionality - initial patients
const initialPatients: Patient[] = [
  {
    id: '1',
    name: 'John Davis',
    email: 'john.davis@email.com',
    phone: '+1 (555) 111-2222',
    doctor: 'Dr. Michael Chen',
    date: '2025-10-05',
    time: '10:00 AM',
    problem: 'Chest pain and irregular heartbeat',
    status: 'confirmed'
  },
  {
    id: '2',
    name: 'Emily Johnson',
    email: 'emily.j@email.com',
    phone: '+1 (555) 222-3333',
    doctor: 'Dr. Sarah Williams',
    date: '2025-10-06',
    time: '2:00 PM',
    problem: 'Child vaccination checkup',
    status: 'pending'
  },
  {
    id: '3',
    name: 'Robert Miller',
    email: 'rmiller@email.com',
    phone: '+1 (555) 333-4444',
    doctor: 'Dr. James Anderson',
    date: '2025-10-04',
    time: '11:00 AM',
    problem: 'Severe headaches and dizziness',
    status: 'completed'
  }
];

//todo: remove mock functionality - initial blog posts
const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Heart Health: Prevention and Care',
    content: 'Learn about maintaining cardiovascular health through diet, exercise, and regular checkups...',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800',
    author: 'Dr. Michael Chen',
    date: '2025-09-28'
  },
  {
    id: '2',
    title: 'Pediatric Care: What Every Parent Should Know',
    content: 'Essential information about child health, vaccination schedules, and developmental milestones...',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800',
    author: 'Dr. Sarah Williams',
    date: '2025-09-25'
  }
];

//todo: remove mock functionality - initial sub-admins
const initialSubAdmins: SubAdmin[] = [
  { id: '1', name: 'Alice Cooper', email: 'alice@medicare.com', role: 'Content Manager' },
  { id: '2', name: 'Bob Smith', email: 'bob@medicare.com', role: 'Patient Coordinator' }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(initialBlogPosts);
  const [subAdmins, setSubAdmins] = useState<SubAdmin[]>(initialSubAdmins);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    phone: '+1 (555) 100-2000',
    email: 'contact@medicare.com',
    address: '123 Medical Center Dr, Healthcare City, HC 12345'
  });
  const [currentUser, setCurrentUser] = useState<{ role: 'admin' | 'doctor' | null; id: string | null }>({
    role: null,
    id: null
  });

  const addDoctor = (doctor: Omit<Doctor, 'id'>) => {
    const newDoctor = { ...doctor, id: Date.now().toString() };
    setDoctors([...doctors, newDoctor]);
  };

  const deleteDoctor = (id: string) => {
    setDoctors(doctors.filter(d => d.id !== id));
  };

  const updateDoctor = (id: string, doctor: Partial<Doctor>) => {
    setDoctors(doctors.map(d => d.id === id ? { ...d, ...doctor } : d));
  };

  const addPatient = (patient: Omit<Patient, 'id'>) => {
    const newPatient = { ...patient, id: Date.now().toString() };
    setPatients([...patients, newPatient]);
  };

  const updatePatient = (id: string, patient: Partial<Patient>) => {
    setPatients(patients.map(p => p.id === id ? { ...p, ...patient } : p));
  };

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = { ...post, id: Date.now().toString() };
    setBlogPosts([...blogPosts, newPost]);
  };

  const updateBlogPost = (id: string, post: Partial<BlogPost>) => {
    setBlogPosts(blogPosts.map(p => p.id === id ? { ...p, ...post } : p));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(blogPosts.filter(p => p.id !== id));
  };

  const addSubAdmin = (admin: Omit<SubAdmin, 'id'>) => {
    const newAdmin = { ...admin, id: Date.now().toString() };
    setSubAdmins([...subAdmins, newAdmin]);
  };

  const deleteSubAdmin = (id: string) => {
    setSubAdmins(subAdmins.filter(a => a.id !== id));
  };

  const updateContactInfo = (info: ContactInfo) => {
    setContactInfo(info);
  };

  const login = (role: 'admin' | 'doctor', id: string) => {
    setCurrentUser({ role, id });
  };

  const logout = () => {
    setCurrentUser({ role: null, id: null });
  };

  return (
    <AppContext.Provider value={{
      doctors,
      addDoctor,
      deleteDoctor,
      updateDoctor,
      patients,
      addPatient,
      updatePatient,
      blogPosts,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      subAdmins,
      addSubAdmin,
      deleteSubAdmin,
      contactInfo,
      updateContactInfo,
      currentUser,
      login,
      logout
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
