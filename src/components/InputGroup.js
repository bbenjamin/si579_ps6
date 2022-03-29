import React from "react";
// Since WordEntry is in the same directory, you want
// this to be `./WordEntry`, you're currently pointing to a second 'components' directory in 'components'
import ShowRhymes from "./components/WordEntry";
// 👆If you're importing a component, the "import  should
// match the same name as the file you're getting it from.
// It's possible to get around this, but it adds complexity.
// In this case it is also confusing because you would have something
// called 'ShowRhymes' that is actually 'WordEntry'
import { useState, useEffect, useRef } from "react";

const InputGroup = (props) => {
    const [words, setWords] = useState([]);
    const inputRef = useRef();

    // Retrieve the proper URL based on whether the search is for a rhyme or a similar word
    function getDatamuseUrl(type, wordInput) {
        if (type === "rhyme") {
            let url = `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': wordInput.value})).toString()}`;
        }
        else {
            let url = `https://api.datamuse.com/words?${(new URLSearchParams({'ml': wordInput.value})).toString()}`
        }
    }

    // Fetch the data from the API and store the results in the words array
    useEffect((url) => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setWords(Object.values(json)));
    }, []);

    const ShowRhymes = (wordInput) => {
        getDatamuseUrl(wordInput)

    }

    // Add keyboard functionality so it runs the program when 'enter' is pressed
    const keyDownHandler = (e) => {
        if (e.key === 'Enter') {
            ShowRhymes()
        }
    }

    return(
        <div className="row">
        <div className="input-group col">
            <input
                ref={inputRef}
                className="form-control"
                type="text"
                placeholder="Enter a word"/>

            <button
                type="button"
                className="btn btn-primary"
                // How do I pass the word input into the WordEntry function?
                // Answer: make a state variable such as `wordInput`, and you don't
                // even have to pass it in. It will automatically be available to ShowRhymes().
                // Look at the add event form in the umich events app to see how we wire
                // state to inputs.
                onClick={ShowRhymes}>Show rhyming words
            </button>

            <button>
                type="button"
                className="btn btn-secondary"
                    Show synonyms
            </button>
        </div>
    </div>)

};
export default InputGroup