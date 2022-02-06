import { Route, useNavigate, Routes } from "react-router-dom";
import Offers from "./Offers";
const About = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit
        quibusdam nobis laborum. Corporis eos incidunt iusto eligendi debitis
        nihil eaque tempore similique a at? Officiis necessitatibus dicta
        voluptates, laborum placeat repudiandae. Voluptatum beatae fugit sunt
        officia hic corporis laudantium inventore, minus, similique eveniet
        explicabo eius laborum iste! Nam, ex?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, aliquid
        est. Reprehenderit repudiandae natus sit libero. Temporibus veniam
        placeat alias nostrum reiciendis soluta recusandae eum reprehenderit
        aperiam sed eos optio voluptas necessitatibus impedit, asperiores at
        deleniti, iusto qui a architecto quod ipsa in consequuntur! Nulla quod
        non beatae, magnam rerum dolorem esse, officia incidunt accusamus iste
        eligendi voluptas veniam quisquam!
      </p>
      <button onClick={() => navigate("/products")}>See our products</button>
      <Routes>
        <Route path="offers" element={<Offers />} />
      </Routes>
    </div>
  );
};

export default About;
