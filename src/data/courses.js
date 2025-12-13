const courses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Perfect for beginners!',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Jane Doe',
    duration: '8 weeks',
    lessons: [
      {
        id: '101',
        title: 'HTML Basics',
        content: '<p>This lesson covers the very basics of HTML, including common tags like <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, and list elements like <code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>. You will learn how to structure a basic web page.</p><p>Key concepts: Document Object Model (DOM), semantic HTML, attributes.</p>',
        videoUrl: 'https://www.youtube.com/embed/BsDoLVMnmZs', // Example YouTube embed
      },
      {
        id: '102',
        title: 'CSS Styling',
        content: '<p>Dive into CSS to style your HTML pages. Learn about selectors, properties, values, the box model, flexbox for layout, and basic responsive design principles. Making your pages look good is crucial!</p><p>Key concepts: Cascading Style Sheets, specificity, inheritance, responsive design.</p>',
        videoUrl: 'https://www.youtube.com/embed/OXGznpLqc_Y',
      },
      {
        id: '103',
        title: 'JavaScript Fundamentals',
        content: '<p>Understand the core concepts of JavaScript, the language of the web. Topics include variables, data types, operators, control flow (if/else, loops), functions, and basic DOM manipulation. This is where your web pages come alive!</p><p>Key concepts: Variables, functions, control structures, event handling.</p>',
        videoUrl: 'https://www.youtube.com/embed/W6NZfCO5sPU',
      },
    ],
  },
  {
    id: '2',
    title: 'Advanced React Development',
    description: 'Master advanced React concepts, including hooks, context API, performance optimization, and custom hooks. Build scalable and robust applications.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-ad2d44c9b9cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'John Smith',
    duration: '10 weeks',
    lessons: [
      {
        id: '201',
        title: 'React Hooks Deep Dive',
        content: '<p>Explore the power of React Hooks like <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, <code>useReducer</code>, and <code>useCallback</code>. Understand how to manage state and side effects effectively in functional components.</p><p>Key concepts: State management, side effects, memoization.</p>',
        videoUrl: 'https://www.youtube.com/embed/dpw9EHDh2bM',
      },
      {
        id: '202',
        title: 'Context API and Global State',
        content: '<p>Learn how to use React's Context API for global state management without prop drilling. Understand when and how to apply it for a cleaner component tree.</p><p>Key concepts: Global state, provider pattern, consumer components.</p>',
        videoUrl: 'https://www.youtube.com/embed/lsVfE_8fP8k',
      },
      {
        id: '203',
        title: 'Performance Optimization in React',
        content: '<p>Discover techniques to optimize your React applications for speed and responsiveness. Topics include <code>React.memo</code>, <code>useMemo</code>, <code>useCallback</code>, lazy loading, and code splitting.</p><p>Key concepts: Performance tuning, re-renders, bundle size.</p>',
        videoUrl: 'https://www.youtube.com/embed/fLz8_5Jtq2Y',
      },
    ],
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Understand the core principles of User Interface (UI) and User Experience (UX) design to create intuitive and engaging digital products.',
    imageUrl: 'https://images.unsplash.com/photo-1596526131083-ef15244be7e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    instructor: 'Emily White',
    duration: '6 weeks',
    lessons: [
      {
        id: '301',
        title: 'Introduction to UI/UX',
        content: '<p>Get an overview of what UI and UX design entail, their importance in software development, and the differences between them. Learn about the user-centered design process.</p><p>Key concepts: User experience, user interface, human-computer interaction.</p>',
        videoUrl: 'https://www.youtube.com/embed/Ovj4hFx_e10',
      },
      {
        id: '302',
        title: 'Usability and Accessibility',
        content: '<p>Explore principles of usability and how to create accessible designs that cater to a wide range of users, including those with disabilities. Understand WCAG guidelines.</p><p>Key concepts: Accessibility, inclusive design, WCAG.</p>',
        videoUrl: 'https://www.youtube.com/embed/V6_V2G9m1C8',
      },
    ],
  },
];

export const getCourses = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses);
    }, 500);
  });
};

export const getCourseById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const course = courses.find((c) => c.id === id);
      if (course) {
        resolve(course);
      } else {
        reject(new Error('Course not found'));
      }
    }, 500);
  });
};

export const getLessonById = (courseId, lessonId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const course = courses.find((c) => c.id === courseId);
      if (!course) {
        reject(new Error('Course not found'));
        return;
      }
      const lesson = course.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        resolve(lesson);
      } else {
        reject(new Error('Lesson not found'));
      }
    }, 500);
  });
};
