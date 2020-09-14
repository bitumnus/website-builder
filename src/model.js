import image from './assets/addr-sea.png';
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from './classes/blocks';
import { css } from './utils';

export const model = [
    new TitleBlock('Нужен отдых', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #a8dadc, #457b9d, #457B9D)',
            padding: '1.5rem',
            color: '#F1FAEE',
            'text-align': 'center',
        })
        // styles: 'background: linear-gradient(to right, #a8dadc, #457b9d, #457B9D); padding:1.5rem; color: #F1FAEE; text-align: center;'
    }),
    new TextBlock('Три причины поехать на Адриатическое море', {
        styles: 'background: linear-gradient(to right, #ffa69e, #ff6b6b, #e63946); color: #F1FAEE; padding: 1rem; text-align: center;'
    }),
    new TextColumnsBlock([
        'Черногория обладает потрясающей в своей девственности красотой природы в частности Biogradska gora, пожалуй единственным оставшимся девственным и не тронутым лесом в Европе.',
        'Мягкий климат и комфортная влажность воздуха.',
        'Самые красивые и чистые пляжи Европы. Удивительное сочетание гор и моря.'
    ], {
        styles: 'background: linear-gradient(to right, #95d5b2, #52b788, #2d6a4f); color: #F1FAEE; padding: 1rem'
    }),
    new ImageBlock(image, {
        alt: 'Аддриатическое море',
        imageStyles: 'width: 100%;',
        styles: 'padding: 1rem 0;'
    }),
]