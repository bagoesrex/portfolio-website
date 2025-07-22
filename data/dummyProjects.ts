import { Project } from "@/types/project";

export const dummyProjects: Project[] = [
    {
        id: "1",
        title: "Website Portfolio",
        description:
            "Situs pribadi untuk menampilkan karya, profil, dan pengalaman saya sebagai web developer. Halaman ini dirancang responsif agar nyaman diakses di berbagai perangkat. Terdapat fitur galeri proyek, biografi singkat, dan link ke sosial media. Proyek ini juga berfungsi sebagai etalase skill dan teknologi yang saya kuasai.",
        slug: "website-portfolio",
        date: "2025-06-01",
        techStack: ["Nextjs", "TailwindCSS", "ShadcnUI"],
    },
    {
        id: "2",
        title: "Absensi Online",
        description:
            "Aplikasi absensi karyawan berbasis lokasi yang memudahkan proses pencatatan kehadiran. Sistem ini hanya memperbolehkan absensi saat karyawan berada di area tertentu. Admin dapat melihat rekap kehadiran secara real-time melalui dashboard. Proyek ini ditujukan untuk perusahaan dengan sistem kerja fleksibel maupun hybrid.",
        slug: "absensi-online",
        date: "2025-05-15",
        techStack: ["Nextjs", "TailwindCSS", "ShadcnUI"],
    },
    {
        id: "3",
        title: "AI Edu Platform",
        description:
            "Sebuah platform edukasi yang menyederhanakan konsep kecerdasan buatan untuk pemula. Terdapat materi interaktif, simulasi, dan kuis yang membuat belajar AI jadi menyenangkan. Pengguna bisa belajar secara mandiri dan progres mereka disimpan secara otomatis. Cocok untuk pelajar, guru, dan siapa saja yang tertarik dengan teknologi AI.",
        slug: "ai-edu-platform",
        date: "2025-04-22",
        techStack: ["Nextjs", "TailwindCSS", "Prisma", "PostgreSQL"],
    },
    {
        id: "4",
        title: "Sistem E-Library",
        description:
            "Platform perpustakaan digital untuk mempermudah akses koleksi buku dan referensi secara online. Pengguna bisa mencari, meminjam, dan membaca buku langsung dari aplikasi. Admin dapat mengelola koleksi dan memantau statistik peminjaman. Sistem ini dirancang untuk sekolah dan kampus yang ingin bertransformasi ke arah digital.",
        slug: "sistem-e-library",
        date: "2025-03-10",
        techStack: ["React", "TailwindCSS", "Firebase"],
    },
];
