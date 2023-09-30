import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdvocateLayouts from '../../layouts/advocatelayouts/AdvocateLayouts';
import AdvocateDashboard from '../../pages/AdvocateDashboard/AdvocateDashboard';
import LawfirmDashboard from '../../pages/LawfirmDashboard/LawfirmDashboard';
import LawfirmMainLayouts from '../../layouts/lawfirmlayouts/LawfirmMainLayouts';
import AdvocateList from '../../pages/LawfirmDashboard/AdvocateList';
import Memberslist from '../../pages/LawfirmDashboard/Memberslist';
import Notification from '../../pages/LawfirmDashboard/Notification';
import AdvocateLogin from '../../pages/AdvocateDashboard/AdvocateLogin'
import AdvocateRegistraction from '../../pages/AdvocateDashboard/AdvocateRegistraction'
import Association from '../../pages/AdvocateDashboard/Association';
import Lawfirm from '../../pages/AdvocateDashboard/Lawfirm';
import Membership from '../../pages/AdvocateDashboard/Membership';

function AdvocateRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<AdvocateLogin />} />
      <Route path="/register" element={<AdvocateRegistraction />} />

      <Route path="/advocate" element={<AdvocateLayouts />}>
        <Route index element={<AdvocateDashboard />} />

        <Route path="nested-route" element={<LawfirmMainLayouts />}>
            <Route index element={<LawfirmDashboard />} />
            <Route path="advocates" element={<AdvocateList />} />
            <Route path="members" element={<Memberslist />} />
            <Route path="notification" element={<Notification />} />
            <Route path=":lawfirmId" element={<LawfirmDashboard />} />
        </Route>

        <Route path="association" element={<Association />} />
        <Route path="lawfirm" element={<Lawfirm />} />
        <Route path="membership" element={<Membership />} />
      </Route>
    </Routes>
  );
}

export default AdvocateRoutes;









// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';

// import AdvocateLayouts from '../../layouts/advocatelayouts/AdvocateLayouts';
// import AdvocateDashboard from '../../pages/AdvocateDashboard/AdvocateDashboard';
// import LawfirmDashboard from '../../pages/LawfirmDashboard/LawfirmDashboard';
// import LawfirmMainLayouts from '../../layouts/lawfirmlayouts/LawfirmMainLayouts';
// import AdvocateList from '../../pages/LawfirmDashboard/AdvocateList';
// import Memberslist from '../../pages/LawfirmDashboard/Memberslist';
// import Notification from '../../pages/LawfirmDashboard/Notification';
// import AdvocateLogin from '../../pages/AdvocateDashboard/AdvocateLogin'
// import AdvocateRegistraction from '../../pages/AdvocateDashboard/AdvocateRegistraction'
// import Association from '../../pages/AdvocateDashboard/Association';
// import Lawfirm from '../../pages/AdvocateDashboard/Lawfirm';
// import Membership from '../../pages/AdvocateDashboard/Membership';
// function AdvocateRoutes() {
//   // const location = useLocation();


//   return (
//     <Routes>
//       <Route path="/login" element={<AdvocateLogin />} />
//       <Route path="/register" element={<AdvocateRegistraction />} />

//       <Route path="/advocate" element={<AdvocateLayouts />}>
//         <Route index element={<AdvocateDashboard />} />


// <Route path="/advocate/nested-route" element={<LawfirmMainLayouts />}>
// <Route path=":lawfirmId" element={<LawfirmDashboard />} />
//     {/* <Route index element={<PlaceholderDashboard />} /> */}
//     <Route path="advocates" element={<AdvocateList />} />
//     <Route path="members" element={<Memberslist />} />
//     <Route path="notification" element={<Notification />} />
// </Route>
//         <Route path="association" element={<Association />} />
//         <Route path="lawfirm" element={<Lawfirm />} />
//         <Route path="membership" element={<Membership />} />
//       </Route>
//     </Routes>
//   );
// }




// export default AdvocateRoutes;



