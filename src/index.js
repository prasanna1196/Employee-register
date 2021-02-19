import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    avatar="https://source.unsplash.com/random"
                    date="Today at 5 A.M"
                    comment="Nice Post!" />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    avatar="https://source.unsplash.com/random"
                    date="Yesterday at 10 P.M"
                    comment="Not bad.." />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="John" 
                    avatar="https://source.unsplash.com/random"
                    date="Today at 2 P.M"
                    comment="Hmm, interesting" />
            </ApprovalCard>
            
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));