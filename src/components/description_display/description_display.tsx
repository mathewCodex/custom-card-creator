import React from 'react';
import PATHS from './description_paths';

interface Props {
    description: string
}

const KEYWORD_REF = '!';
const CARD_REF = '#';
const ICON_REF = '*';

const definers = {
    [KEYWORD_REF]: true,
    [CARD_REF]: true,
    [ICON_REF]: true
}

const scanner = (word : string, idx: number) => {
    if (word.length <= 1) return ' ' + word;

    if (word[0] in definers && word.slice(1).includes(word[0])) {
        const endIdx = word.slice(1).indexOf(word[0]) + 1;

        switch(word[0]) {
            case KEYWORD_REF:
                return (
                    <>
                        <span className='keyword' key={idx}>{' ' + word.slice(1, endIdx)}</span>
                        {word.slice(endIdx + 1) + ' '}
                    </>
                );
            case CARD_REF:
                return (
                    <>
                        <span className='card-reference' key={idx}>{' ' + word.slice(1, endIdx)}</span>
                        {word.slice(endIdx + 1) + ' '}
                    </>
                );
            case ICON_REF:
                return (
                    <>
                        {' '}
                        <img className='inline-icon' src={PATHS[word.slice(1, endIdx).toLowerCase()]} alt='inline-icon' key={idx} />
                        {word.slice(endIdx + 1)}
                    </>
                );
            default:
                return ' ' + word;
        }
    } else {
        return ' ' + word;
    }
}

const converter = (text : string) => (
    text.split(' ')
        .map((word, idx) => scanner(word, idx))
)

const DescriptionDisplay : React.FC<Props> = ({ description }) => (
    <h4 className='description'>
        { converter(description) }
    </h4>
);

export default DescriptionDisplay;