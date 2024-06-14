import Styles from './Home.module.css'

const Home2left = () => {
  return (
    <div className='flex flex-col gap-y-2 mt-6 w-2/4'>
  
    <div className='flex items-center gap-x-2.5 '>
         <div className={Styles.home2left}></div>
         <div className='font-sans'>
            <p className='font-bold'>Pet Grooming Service</p>
            <p className='font-light'>Book In-Home Grooming Session</p>
            <p className='font-semibold text-blue-700'>Find out more about Pet Grooming</p>
         </div>
    </div>
    <div className='flex  items-center gap-x-2.5 '>
         <div className={Styles.home2left2}></div>
         <div className='font-sans'>
            <p className='font-bold'>Cat Boarding & Dog Boarding Service</p>
            <p className='font-light'>Book Pet Boarding & Pet Sitting Service</p>
            <p className='font-semibold text-blue-700'>Find out more about Pet Boarding</p>
         </div>
    </div>
    <div className='flex items-center gap-x-2.5 '>
         <div className={Styles.home2left3}></div>
         <div className='font-sans'>
            <p className='font-bold'>Dog Walking Service</p>
            <p className='font-light'>Book Personalised Dog Walkers Near You</p>
            <p className='font-semibold text-blue-700'>Find out more about Dog Walking </p>
         </div>
    </div>
    <div className='flex items-center gap-x-2.5 '>
         <div className={Styles.home2left4}></div>
         <div className='font-sans'>
            <p className='font-bold'>Vet on call & at-home</p>
            <p className='font-light'>Book Expert Veterinary Care Service</p>
            <p className='font-semibold text-blue-700'>Find out more about Vet on call</p>
         </div>
    </div>
    </div>
  )
}

export default Home2left
