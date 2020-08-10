// import React from 'react';

// function NavTabs(props) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#Menu"
//           onClick={() => props.handlePageChange('Menu')}
//           className={
//             props.currentPage === 'Menu'
//               ? 'nav-link active'
//               : 'nav-link'
//           }
//         >
//           Menu
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#Add"
//           onClick={() => props.handlePageChange('Add')}
//           className={
//             props.currentPage === 'Add'
//               ? 'nav-link active'
//               : 'nav-link'
//           }
//         >
//           Add
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#View"
//           onClick={() => props.handlePageChange('View')}
//           className={
//             props.currentPage === 'View'
//               ? 'nav-link active'
//               : 'nav-link'
//           }
//         >
//           View
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#About"
//           onClick={() => props.handlePageChange('About')}
//           className={
//             props.currentPage === 'About'
//               ? 'nav-link active'
//               : 'nav-link'
//           }
//         >
//           About
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => props.handlePageChange('Contact')}
//           className={
//             props.currentPage === 'Contact'
//               ? 'nav-link active'
//               : 'nav-link'
//           }
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;
import React from 'react';

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#Menu"
          onClick={() => props.handlePageChange('Menu')}
          className={
            props.currentPage === 'Menu'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Menu
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Add"
          onClick={() => props.handlePageChange('Add')}
          className={
            props.currentPage === 'Add'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Add
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#View"
          onClick={() => props.handlePageChange('View')}
          className={
            props.currentPage === 'View'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          View
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange('Contact')}
          className={
            props.currentPage === 'Contact'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => props.handlePageChange('About')}
          className={
            props.currentPage === 'About'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          About
        </a>
      </li>
      {/* <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange('Logout')}
          className={
            props.currentPage === 'Logout'
              ? 'nav-link active'
              : 'nav-link'
          }
        >
          Logout
        </a>
      </li> */}
    </ul>
  );
}

export default NavTabs;
