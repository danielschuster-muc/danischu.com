import Link from "next/link";
import React from "react";

export default function LegalNotice() {
  return (
    <div className="container mx-auto mt-5 space-y-3 rounded p-5 shadow-lg ring-1 ring-slate-900/5 dark:bg-gray-900">
      <h1>Legal Notice</h1>
      <div>
        <h2>Information pursuant to section 5 of the German Telemedia Act (TMG)</h2>
        <p>Daniel Schuster</p>
        <p>Email: contact@danischu.com</p>
      </div>
      <div>
        <h2>EU dispute resolution</h2>
        <p>
          The European Commission provides a platform for online dispute resolution (ODR):{" "}
          <Link
            className="text-gray-700 underline hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            href="https://ec.europa.eu/consumers/odr">
            https://ec.europa.eu/consumers/odr
          </Link>
        </p>
        <p>Please refer to the site notice above for our email address.</p>
        <p>
          We are neither willing nor obliged to participate in dispute resolution proceedings in
          front of a consumer arbitration board.
        </p>
      </div>
      <div>
        <h2>Copyright</h2>
        <p>
          The contents and works on these pages created by the site operators are subject to German
          copyright law. The duplication, processing, distribution and any kind of exploitation
          outside the of the copyright require the written consent of the respective author or
          creator. Downloads and copies of this site are only permitted for private, non-commercial
          use. Insofar as the content on this site was not created by the operator, the copyrights
          of third parties are respected. In particular, third-party content is identified as such.
          Should you nevertheless become aware of a copyright infringement, please inform us
          accordingly. If we become aware of any infringements, we will remove such content
          immediately.
        </p>
      </div>
    </div>
  );
}
