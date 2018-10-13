import React from 'react';
import Style from '../style.scss';

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        
    }
    render() {
        return (
            <main className={Style.main}>
                <div>
                    안녕하세요 반가워요 프론트엔드개발자 리엑트 패키지입니다.
                    편하게사용해주세요~
                </div>
            </main>
        );
    }
}