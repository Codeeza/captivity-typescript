import React from "react";
import styles from "./CustomOrders.module.css";

const CustomOrders = () => {
  return (
    <div className={styles.customOrdersContainer}>
      <h1
        className={`${styles.customOrdersTitle} text-4xl font-serif font-bold mb-2`}
      >
        Custom Orders
      </h1>
      {/* Line */}
      <div className="w-[1900px] h-px bg-gray-500 mb-4 mt-8"></div>
      <br />

      <div
        className={`${styles.customOrdersSection}justify justify-center mb-4`}
      >
        <h2 className="text-[27px] font-serif text-gray-500 text-center">
          CUSTOM FACTORY ORDERS
        </h2>
        <br />
        <p>
          Custom factory orders give you greater flexibility and allow you to
          create innovative styles and trends to suit your marketing
          requirements. Change piping, stitching, fabrics or sandwich colours to
          match corporate colours and logos – or develop your own, unique range.
        </p>
        <br />
        <p>
          Our design team has the experience and expertise to bring your ideas
          to life. Email your enquiry to{" "}
          <a href="https://www.monica@captivity.co.za.">
            <span className="text-red-600">monica@captivity.co.za</span>
          </a>{" "}
          We would love to hear from you.
        </p>
        <br />
      </div>
      {/* Line Above Procedures */}
      <div className="w-[1900px] h-px bg-gray-500 mb-4 mt-8"></div>

      <div className="pr-5 mb-4 mt-4">
        <h2 className="text-[27px] font-serif text-gray-500 text-center">
          PROCEDURES
        </h2>
        <br />
        <p>
          Enquiries for orders can be emailed to{" "}
          <a
            href="mailto:info@captivity.co.za"
            className="text-red-600 underline"
          >
            info@captivity.co.za
          </a>
        </p>

        <br />

        <ul className="text-black list-disc list-inside space-y-2">
          <li>
            Our minimum requirement for custom factory orders is 3000 units per
            colour, per style.
          </li>
          <li>
            On confirmation of your order, we will gladly execute a sample for
            your approval.
          </li>
          <li>Samples take 8-10 working days to arrive.</li>
          <li>
            Once samples are approved, we go ahead with full production of the
            order.
          </li>
          <li>Production of the order takes 60-90 days to produce.</li>
          <li>
            Once completed, the order is shipped, and this is usually a 4-6 week
            delivery.
          </li>
        </ul>

        <br />

        <p>
          For further information, please contact{" "}
          <a href="tel:+27215103868" className="text-gray-600 font-bold">
            Monica at (021) 510 3868
          </a>
        </p>
      </div>

      {/* Line Above Understanding Custom Headwear and Apparel */}
      <div className="w-[1900px] h-px bg-gray-500 mb-4 mt-8"></div>

      <br />
      <section className={`${styles.customOrdersSection} mb-4`}>
        <h2 className="text-[27px] font-serif text-gray-500 text-center">
          UNDERSTANDING CUSTOM HEADWEAR AND APPAREL
        </h2>
        <br />
        <div className={`${styles.customOrdersContent} text-black`}>
          <div className={styles.customOrdersSectionContent}>
            <h2 className="text-red-600">HEADWEAR STYLES</h2>
            <br />
            <h4>1.Crown</h4>
            <br />
            <li>
              consists of five or six panels sewn together to form a cover for
              the head
            </li>
            <li> made of various fabrics</li>
            <li> Panels may vary in size and shape</li>
            <li> Standard panel width: 75mm across</li>
            <br />
            <h4>2.Button</h4>
            <br />
            <li>covered metal button size</li>
            <li>15mm diameter</li>
            <br />
            <h4>3. Eyelets</h4>
            <br />
            <li>embroidered eyelets</li>
            <li>gunmetal eyelets: 8mm diameter</li>
            <br />
            <h4>4.Sweatband</h4>
            <br />
            <li>30mm wide</li>
            <li>4 rows of stitching on some styles.</li>
            <br />
            <h4>5.Closure</h4>
            <br />
            <li>Gunmetal belt buckle and tuck-in return</li>
            <li>Self-fabric velcro strap</li>
            <li>Plastic tab</li>
            <li>Gunmetal clasp</li>
            <br />
            <h4>6.PEAK</h4>
            <br />
            <li>
              Pre-curved peak of plastic compound which is flexible,durable, and
              ensures maintenance of the shape
            </li>
            <li>Top stitched with 4 rows of stitching on some styles</li>
            <li>Sandwich peak – 3mm thickness, suede-covered peak</li>
            <li>Peak length: +/- 70mm from crown</li>
            <li>Binding on edge of peak</li>
            <li>Under peak – varies in fabric type</li>
            <br />
            <h4>7.GENERAL</h4>
            <br />
            <li>Cap size: 58cm circumference</li>
            <li>Kids cap size: 54cm</li>
            <li>Hat size: S/M – 57cm, L/XL – 60cm</li>
            <li>All seams are top-stitched</li>
            <li>Back strap size: 16mm wide x 145mm long</li>
            <li>Covered inside seams</li>
            <li>Crown is pro-stitched to peak</li>
            <br />
            <h4>8.BRANDING</h4>
            <br />
            <li>Embroidery or screen printing</li>
            <li>logo or lettering on front</li>
            <li>cap embroidery size: cap 100mm x 53mm</li>
            <li>hat embroidery size: 80mm x 50mm</li>
            <li>visor embroidery size: 80mm x 30mm</li>
            <li>cap printing size</li>
            <ul>
              <li>5 panel cap: 80mm x 50mm</li>
              <li>6 panel cap: 65mm x 55mm</li>
            </ul>
            <li>hat printing size: 100mm x 55mm</li>
            <li>visor printing: 80mm x 40mm</li>
            <li>Logo or lettering on the back</li>
            <ul>
              <li>straight</li>
              <li>an arc</li>
            </ul>
          </div>
          <br />
          <div className={styles.customOrdersSectionContent}>
            <h2 className="text-red-600">APPAREL</h2>
            <br />
            <h4>2.Fabric</h4>
            <br />
            <li>Heavy brushed cotton</li>
            <li>Cotton twill</li>
            <li>Nylon</li>
            <li>Polyester</li>
            <li>Acrylic / Wool blend</li>
            <li>Acrylic</li>
            <li>12 oz. Denim</li>
            <li>Polar Fleece</li>
            <li>Polymesh / Airtex</li>
            <li>Micro-fibre</li>
            <br />
            <h4>8.label</h4>
            <br />
            <li>woven label sewn onto the sweatband of each Captivity item.</li>
            <li>
              Look out for this watermark in all our caps to be assured of the
              100% product quality guarantee:
            </li>
            <br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomOrders;
