import React from 'react';
import styled from 'styled-components';
const Contents = styled.div`
    color: red;
    font-size: 20px;
`;

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        
    }
    render() {
        return (
            <main>
                <div>
                    안녕하세요 반가워요 프론트엔드개발자 리엑트 패키지입니다.
                    편하게사용해주세요~
                    <Contents>ddd</Contents>
                </div>
            </main>
        );
    }
}