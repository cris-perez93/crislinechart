interface Project {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "chart",
    title: "Chart Library",
    url: "/charts",
    description:
      "Resume se lleva acabo con el fin de ofrecer un servicio para que los usuarios puedan crear su curriculum de manera rapida y sencilla , ademas de poder compartirlo con otras personas. Actualmente se encuentra en desarrollo.",
    imgUrl:
      "https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "resume",
    title: "Resume",
    url: "/resume",
    description:
      "Resume se lleva acabo con el fin de ofrecer un servicio para que los usuarios puedan crear su curriculum de manera rapida y sencilla , ademas de poder compartirlo con otras personas. Actualmente se encuentra en desarrollo.",
    imgUrl:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
