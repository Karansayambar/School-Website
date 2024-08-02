import Navbar from '../components/Navbar'
import React, { Suspense } from 'react'

const HomePage = () => {
  const AboutPage = React.lazy(() => import('./AboutPage'));
  const CarouselPage = React.lazy(() => import('../components/CarouselPage'));
  const GalleryPage = React.lazy(() => import('./GalleryPage'));
  const ContactPage = React.lazy(() => import("./ContactPage"));
  const StudentsPage = React.lazy(() => import("./StudentsPage"));
  const CurriculumPage = React.lazy(() => import("./CurriculumPage"));
  const AdmissionsPage = React.lazy(() => import("./AdmissionPage"));
  const FacultyPage = React.lazy(() => import("./FacultyPage"));

  return (
    <div className='bg-slate-300'>
        <Navbar/>
         <Suspense fallback={<div>...Loading</div>}>
        <section id='home'>
          <CarouselPage/>
        </section>
        <section id='about'>
            <AboutPage/>
        </section>
        <section id='academics'>
          <CurriculumPage/>
        </section>
        <section id='admissions'>
          <AdmissionsPage/>
        </section>
        <section id='faculty'>
          <FacultyPage/>
        </section>
        <section id='students'>
          <StudentsPage/>
        </section>
        <section id='gallery'>
            <GalleryPage/>
        </section>
        <section id='contact'>
          <ContactPage/>
        </section>
        </Suspense>
        
    </div>
  )
}

export default HomePage