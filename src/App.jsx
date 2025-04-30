// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Body from "./components/Body";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Feed from "./components/Feed";
// import Connections from "./components/Connections";
// import Requests from "./components/Requests";

// function App() {
//   return (
//     <>
//       <Provider store={appStore}>
//         <BrowserRouter basename="/">
//           <Routes>
//             <Route path="/" element={<Body />}>
//               <Route path="/" element={<Feed />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/connections" element={<Connections />} />
//               <Route path="/requests" element={<Requests />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </Provider>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";

// Footer-linked pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CancellationAndRefund from "./pages/CancellationAndRefund";
import ShippingAndDelivery from "./pages/ShippingAndDelivery";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter basename="/">
        <Routes>
          {/* Layout-wrapped routes */}
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="profile" element={<Profile />} />
            <Route path="connections" element={<Connections />} />
            <Route path="requests" element={<Requests />} />
          </Route>

          {/* Standalone routes (no layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/cancellation-and-refund" element={<CancellationAndRefund />} />
          <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
