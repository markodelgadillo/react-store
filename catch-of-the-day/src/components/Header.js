import React from 'react';

// stateless functional component
// Use if you're only passing in data and rendering
const Header = props => (
        <header className="top">
                <h1>
                    Catch 
                        <span className="ofThe">
                            <span className="of">Of</span> 
                            <span className="the">The</span> 
                        </span>                
                    Day
                 </h1>
            <h3 className="tagline">
            {/* 'this' refers to Header, 'props' refers to the attributes in 
            the <Header /> element in App.js and 'tagline' is the class
            of the attribute in the element. */}
                <span>{props.tagline}</span>
            </h3>
        </header>
    );

// class Header extends React.Component {
//     render() {
//         return (
//             <header className="top">
//                 <h1>
//                     Catch 
//                         <span className="ofThe">
//                             <span className="of">Of</span> 
//                             <span className="the">The</span> 
//                         </span>                
//                     Day
//                  </h1>
//             <h3 className="tagline">
//             {/* 'this' refers to Header, 'props' refers to the attributes in 
//             the <Header /> element in App.js and 'tagline' is the class
//             of the attribute in the element. */}
//                 <span>{this.props.tagline}</span>
//             </h3>
//             </header>
//         )
//     }
// }

export default Header;