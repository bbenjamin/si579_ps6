// Since InputGroup is in the same directory, you want
// this to be `./InputGroup`, you're currently pointing to a second 'components' directory in 'components'
// Same with WordEntry
import InputGroup from "./components/InputGroup";
import WordEntry from "./components/WordEntry";
// You want to import useState from 'react';
// See the events & todo list apps we did in class for reference.
import {useState} from ".";

const ShowRhymes = (props) => {

    const generateWords = () => {
        const words_list = [];

        // Loop through each word in a list and append it
        props.words.forEach((word, index) =>
            words_list.push(
                <WordEntry>
                word={WordEntry.word})
                </WordEntry>
        )
        )
    }

};

export default ShowRhymes;