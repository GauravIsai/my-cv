/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Gaurav',
  lastName: 'Isai',
  jobTitle: 'Software Developer',
  city: 'Waterloo',
  postalCode: '', // Add your postal code if available
  country: 'Canada',
  phone: '647-897-1831',
  email: 'cdgauravisai@gmail.com',
  education: [
    {
      school: 'Conestoga College, Doon Campus',
      degree: 'Web Development',
      graduationDate: 'April 2024',
      description: ''
    },
    {
      school: 'Semcom College, V.V. Nagar, Gujarat, India',
      degree: 'Bachelor of Computer Application',
      graduationDate: 'April 2017',
      description: ''
    }
  ],
  links: [
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/gaurav-isai/'
    },
    {
      label: 'GitHub',
      link: 'https://github.com/GauravIsai'
    }
  ],
  skills: [
    '.NET Core', 'C#', 'JavaScript', 'TypeScript', 'SQL Server',
    'Node.js', 'HTML', 'CSS', 'Bootstrap', 'Git/GitHub', 
    'SSRS', 'SSIS', 'Agile', 'Scrum'
  ],
  languages: ['English', 'Hindi'],
  professionalSummary: `Dynamic Software Developer with 5 years of .NET and SQL Server experience, adept at developing, testing, and deploying Web and Windows Applications. Proficient in database development, integration, and optimization using Microsoft SQL Server, with hands-on experience in basic administrative tasks. Skilled in SSIS, SSRS, and .NET, and familiar with Azure technologies, seeking impactful projects to further enhance technical and leadership capabilities.`,
  employmentHistory: [
    {
      jobTitle: 'Software Developer',
      startDate: 'March 2020',
      endDate: 'December 2022',
      employer: 'ELINX / Elitium Pvt. Ltd',
      city: 'Pune, India',
      achievements: [
        'Spearheaded the development, testing, and deployment of dynamic Web and Windows Applications using .NET technologies.',
        'Designed and implemented RESTful APIs, ensuring seamless integration with external systems.',
        'Optimized applications through dependency injection and design patterns, enhancing maintainability and performance.',
        'Managed database integration and optimization using SQL Server, ensuring efficient data handling.',
        'Collaborated with stakeholders to gather requirements and develop customized solutions.'
      ]
    },
    {
      jobTitle: 'Software Developer',
      startDate: 'June 2018',
      endDate: 'January 2020',
      employer: 'Gemini Learning System Pvt. Ltd',
      city: 'Ahmedabad, India',
      achievements: [
        'Developed and deployed dynamic Web and Windows Applications using .NET and SQL Server.',
        'Managed database integration, optimization, and maintenance using SQL Server.',
        'Conducted basic SQL Server administrative tasks, including backups, indexing, and query optimization.',
        'Developed ETL processes with SSIS for data migration and transformation tasks.',
        'Delivered reports using SSRS, enabling detailed insights and analytics for clients.'
      ]
    }
  ],
  photo: 'https://starngage.com/wp-content/uploads/2022/01/61e6a6deb716d549062721.jpg', // Add your photo URL here if you want to display it
}


const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()