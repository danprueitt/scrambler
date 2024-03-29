import React, { useState } from 'react'
import { shuffleArray } from '../../helpers/scramble'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Form() {
    const [scramble, setScramble]: any = useState([])
    const [value, setValue] = useState('')

    const defaultSeperator = ', '

    const [seperator, setSeperator] = useState(defaultSeperator)

    const handleInputChange = (event: { target: { value: any; }; }) => {
        setValue(event.target.value)
    }

    const scrambleSentence = () => {
        const lines = value.split(/\r?\n/).filter(element => element)
        let result: any[] = []
        lines.forEach((line) => {
            const words = line.trim().split(' ')
            shuffleArray(words)
            result.push(<input onClick={copy} readOnly
                               value={'[' + words.join(seperator) + ']'} />)
        })
        setScramble(result)
    }

    const copy = async (e: any) => {
        await navigator.clipboard.writeText(e.target.value)
        toast.success('Copied to clipboard!', {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 1500,
        })
    }

    return (
        <section className='App-form'>
        <textarea className='App-input' placeholder='Enter sentence here'
                  onChange={handleInputChange} />
            <div className='App-form-radio-holder'>
                <input type='radio' id='comma' name='seperator' value=', ' defaultChecked={true} onChange={(e) => {
                    setSeperator(e.target.value)
                }} />
                <label htmlFor='comma'>Comma ( , )</label>
                <input type='radio' id='f_slash' name='seperator' value=' / ' onChange={(e) => {
                    setSeperator(e.target.value)
                }} />
                <label htmlFor='f_slash'>Slash ( / )</label>
            </div>
            <button className='App-form-button' onClick={scrambleSentence}>Scramble</button>
            {scramble.length > 0 &&
                <div className='App-form-input-holder'>{scramble}</div>
            }
            <ToastContainer />
        </section>
    )
}

