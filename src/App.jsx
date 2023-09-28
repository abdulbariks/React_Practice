import Header from"./components/Header"
import Hero from "./components/Hero"
import ContactForm from './components/ContactForm';
import Footer from './components/Footer'

function App() {
    let marks =60;
    const item = ['Dhaka', 'Rangpur', 'Rajshahi', 'Barishal']
  return (
      <div>
      <Header/>
      <Hero/>
      <ContactForm/>
      <Footer/>

       {/* inline css */}
      <h1 style={{color:'red'}}>Hello</h1>

      {/* conditional readering , inline if else*/}
      {
        marks>80?
        <h1>Brilliant Result</h1>
        :
        <h1>Avarage Result</h1>
      }

      {/* immediately invoked function */}
      {
      (()=>{
           if (marks>=80 && marks<=100 ) {
            return <h1>A+</h1>
           }
           else if (marks>=70 && marks<80 ) {
            return <h1>A</h1>
           }
           else if (marks>=60 && marks<70 ) {
            return <h1>A-</h1>
           }
           else if (marks>=50 && marks<60 ) {
            return <h1>B</h1>
           }
           else{
            return <h1>F</h1>
           }
      })()
      }

      {/* JSX Loop Inside with map */}
          <ol>
            {
              item.map((item, i)=>{
                return <option key={i.toString()}>{item}</option>
              })
            }
          </ol>

      </div>

  )
}

export default App
