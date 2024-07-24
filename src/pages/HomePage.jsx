import Navbar from '../components/Navbar'
import CarouselPage from '../components/CarouselPage'
import AboutPage from './AboutPage'
import GalleryPage from './GalleryPage'
import FacultyPage from './FacultyPage'
import ContactPage from './ContactPage'
import StudentsPage from './StudentsPage'
import CurriculumPage from './CurriculumPage'
import AdmissionsPage from './AdmissionPage'

const HomePage = () => {
  return (
    <div className='bg-slate-300'>
        <Navbar/>
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
        
    </div>
  )
}

export default HomePage