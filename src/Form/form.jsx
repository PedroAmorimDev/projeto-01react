import './form.css'

const Form = () => {
window.addEventListener('submit', ()=>{
    window.alert('enviado')
})

    return (
        <>
        <main>
            <form >
                <input type="text" placeholder='Digite seu usuario'/>
                <input type="text" placeholder='Digite sua senha'/>
                <input type="submit" />
            </form>
        </main>
        </>
        
    )
}
export default Form