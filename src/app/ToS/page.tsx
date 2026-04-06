import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | BillsAI Club",
  description:
    "Terms of Service for Bottle Rocket Labs II, LLC — billsai.club and all subdomains.",
};

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-indigo-600 hover:underline"
      >
        &larr; Back to Home
      </Link>

      <h1 className="mb-2 text-3xl font-bold">Terms of Service</h1>
      <p className="mb-1 text-sm text-slate-500">
        Bottle Rocket Labs II, LLC
      </p>
      <p className="mb-1 text-sm text-slate-500">Effective Date: April 5, 2026</p>
      <p className="mb-8 text-sm text-slate-500">
        Applicable to billsai.club and all subdomains
      </p>

      <p className="mb-6 text-sm font-semibold uppercase text-slate-600">
        IMPORTANT: PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING ANY
        OF OUR SERVICES. BY ACCESSING OR USING ANY WEBSITE, APPLICATION, OR
        SERVICE ON BILLSAI.CLUB OR ANY SUBDOMAIN THEREOF, YOU AGREE TO BE BOUND
        BY THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE THE SERVICES.
      </p>

      <section className="space-y-6 text-slate-700 leading-relaxed [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-900">
        <div>
          <h2>1. Agreement to Terms</h2>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally
            binding agreement between you (&ldquo;you,&rdquo; &ldquo;your,&rdquo;
            or &ldquo;User&rdquo;) and Bottle Rocket Labs II, LLC
            (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;), a North Carolina limited liability company,
            governing your access to and use of the website located at
            www.billsai.club, all subdomains thereof (including but not limited to
            gachas.billsai.club, wordcraft.billsai.club, and any future
            subdomains), and all related applications, content, features, and
            services (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p className="mt-3">
            By accessing, browsing, registering for an account, making a purchase,
            or otherwise using any of the Services, you acknowledge that you have
            read, understood, and agree to be bound by these Terms and our Privacy
            Policy, which is incorporated herein by reference. Your continued use of
            the Services constitutes ongoing acceptance of these Terms as they may
            be updated from time to time.
          </p>
        </div>

        <div>
          <h2>2. Eligibility</h2>
          <p>
            The Services are intended solely for individuals who are at least
            eighteen (18) years of age. By using the Services, you represent and
            warrant that you are at least 18 years old and have the legal capacity
            to enter into these Terms. If you are under 18, you are expressly
            prohibited from using, accessing, or registering for any of the
            Services. We do not knowingly collect information from individuals under
            18 years of age.
          </p>
        </div>

        <div>
          <h2>3. Description of Services</h2>
          <p>
            The Services consist of a collection of web-based applications hosted on
            subdomains of billsai.club. These applications are primarily portfolio
            demonstration projects and experimental prototypes built for
            educational, showcase, and personal entertainment purposes. The current
            applications include, but are not limited to:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>KidSpinner</strong> (gachas.billsai.club): A gamified
              spinning-wheel application provided solely for demonstration and
              entertainment purposes.
            </li>
            <li>
              <strong>WordCraft Mobs</strong> (wordcraft.billsai.club): A
              voxel-style educational word game provided solely for demonstration
              and entertainment purposes.
            </li>
            <li>
              <strong>NewsBreef:</strong> An AI-powered news aggregation prototype
              currently in beta.
            </li>
          </ul>
          <p className="mt-3">
            We reserve the right to add, modify, suspend, or discontinue any
            application or Service at any time, with or without notice, and without
            liability to you.
          </p>
        </div>

        <div>
          <h2>4. Demonstration Purposes Disclaimer</h2>
          <p className="font-semibold uppercase">
            THE KIDSPINNER (GACHA SPINNER) APPLICATION AND THE WORDCRAFT MOBS
            APPLICATION, AND ANY OTHER APPLICATION DESIGNATED AS A DEMONSTRATION OR
            PROTOTYPE, ARE PROVIDED SOLELY FOR DEMONSTRATION, PORTFOLIO, AND
            ENTERTAINMENT PURPOSES. ANY PRIZES, REWARDS, POINTS, TOKENS, VIRTUAL
            ITEMS, OR OTHER INCENTIVES DISPLAYED, OFFERED, OR &ldquo;WON&rdquo;
            WITHIN THESE APPLICATIONS ARE ENTIRELY FICTIONAL AND FOR DEMONSTRATION
            ONLY. NEITHER THE COMPANY NOR ITS DEVELOPERS, MEMBERS, OFFICERS, OR
            AGENTS HAVE ANY OBLIGATION WHATSOEVER TO DELIVER, SHIP, AWARD, OR
            OTHERWISE FULFILL ANY SUCH PRIZES OR REWARDS. NO REAL-WORLD VALUE IS
            ATTACHED TO ANY IN-APP ITEMS OR OUTCOMES. YOU ACKNOWLEDGE AND AGREE THAT
            YOUR USE OF THESE DEMONSTRATION APPLICATIONS DOES NOT ENTITLE YOU TO ANY
            PRIZE, COMPENSATION, OR CONSIDERATION OF ANY KIND.
          </p>
        </div>

        <div>
          <h2>5. User Accounts</h2>
          <p>
            Certain features of the Services may require you to create an account.
            When registering, you agree to provide accurate, current, and complete
            information. You are solely responsible for maintaining the
            confidentiality of your account credentials and for all activity that
            occurs under your account. You must notify us immediately at
            bill@billsai.club of any unauthorized use of your account. We reserve
            the right to suspend or terminate your account at any time, for any
            reason, without notice or liability.
          </p>
        </div>

        <div>
          <h2>6. Acceptable Use</h2>
          <p>
            You agree not to use the Services to: (a) violate any applicable local,
            state, national, or international law or regulation; (b) infringe upon
            or violate the intellectual property rights or privacy rights of any
            third party; (c) transmit any material that is unlawful, harmful,
            threatening, abusive, harassing, defamatory, vulgar, obscene, or
            otherwise objectionable; (d) attempt to gain unauthorized access to any
            portion of the Services, other accounts, computer systems, or networks
            connected to the Services; (e) interfere with or disrupt the integrity
            or performance of the Services; (f) use any automated means, including
            bots, scrapers, or spiders, to access or interact with the Services
            without our express written consent; or (g) engage in any conduct that
            restricts or inhibits any other user from using or enjoying the
            Services.
          </p>
        </div>

        <div>
          <h2>7. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Services, including but
            not limited to text, graphics, logos, icons, images, audio clips,
            software, and the compilation thereof, are the exclusive property of
            Bottle Rocket Labs II, LLC or its licensors and are protected by United
            States and international copyright, trademark, patent, trade secret, and
            other intellectual property laws. You are granted a limited,
            non-exclusive, non-transferable, revocable license to access and use the
            Services for your personal, non-commercial use, subject to these Terms.
          </p>
        </div>

        <div>
          <h2>8. Purchases and Payments</h2>
          <p>
            Certain Services or features may require payment, including
            subscriptions or one-time purchases. All payments are processed through
            third-party payment processors. By making a purchase, you agree to pay
            all applicable fees and charges. All sales are final unless otherwise
            required by applicable law. We reserve the right to change our pricing
            at any time. Subscription fees, if applicable, will be billed in advance
            on a recurring basis. You are responsible for canceling your
            subscription before the next billing cycle to avoid charges.
          </p>
        </div>

        <div>
          <h2>9. Disclaimer of Warranties</h2>
          <p className="font-semibold uppercase">
            THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
            OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE
            COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT
            LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. THE COMPANY DOES NOT
            WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR
            FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. THE COMPANY MAKES NO
            WARRANTIES OR REPRESENTATIONS REGARDING THE ACCURACY, RELIABILITY, OR
            COMPLETENESS OF ANY CONTENT AVAILABLE THROUGH THE SERVICES. YOUR USE OF
            THE SERVICES IS AT YOUR SOLE RISK.
          </p>
        </div>

        <div>
          <h2>10. Limitation of Liability</h2>
          <p className="font-semibold uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            BOTTLE ROCKET LABS II, LLC, ITS MEMBERS, MANAGERS, OFFICERS, EMPLOYEES,
            AGENTS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
            TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
            ARISING OUT OF OR IN CONNECTION WITH: (A) YOUR ACCESS TO, USE OF, OR
            INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF
            ANY THIRD PARTY ON THE SERVICES; (C) ANY CONTENT OBTAINED FROM THE
            SERVICES; OR (D) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR
            TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT
            (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER LEGAL THEORY,
            WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
          <p className="mt-3 font-semibold uppercase">
            IN NO EVENT SHALL THE COMPANY&apos;S TOTAL AGGREGATE LIABILITY TO YOU
            FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF
            THE SERVICES EXCEED THE TOTAL AMOUNT PAID BY YOU TO THE COMPANY DURING
            THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO
            THE CLAIM, OR ONE HUNDRED DOLLARS ($100.00), WHICHEVER IS GREATER.
          </p>
        </div>

        <div>
          <h2>11. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Bottle Rocket Labs II,
            LLC and its members, managers, officers, employees, agents, and
            affiliates from and against any and all claims, damages, losses,
            liabilities, costs, and expenses (including reasonable attorneys&apos;
            fees) arising out of or relating to: (a) your use of the Services; (b)
            your violation of these Terms; (c) your violation of any rights of
            another party; or (d) your violation of any applicable law or
            regulation.
          </p>
        </div>

        <div>
          <h2>12. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms and any disputes arising hereunder shall be governed by and
            construed in accordance with the laws of the State of North Carolina,
            without regard to its conflict of law provisions. You agree that any
            legal action or proceeding arising out of or relating to these Terms or
            the Services shall be brought exclusively in the state or federal courts
            located in or serving Orange County, North Carolina (Hillsborough, NC),
            and you hereby consent to the personal jurisdiction and venue of such
            courts.
          </p>
          <p className="mt-3">
            Before filing any claim, you agree to attempt to resolve the dispute
            informally by contacting us at bill@billsai.club. If the dispute is not
            resolved within thirty (30) days of the initial notice, either party may
            proceed with formal legal action in the courts specified above.
          </p>
        </div>

        <div>
          <h2>13. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time in our sole
            discretion. If we make material changes, we will update the
            &ldquo;Effective Date&rdquo; at the top of these Terms and may, at our
            discretion, provide additional notice (such as posting a notice on the
            Services or sending you an email). Your continued use of the Services
            after any such changes constitutes your acceptance of the revised Terms.
            It is your responsibility to review these Terms periodically.
          </p>
        </div>

        <div>
          <h2>14. Termination</h2>
          <p>
            We may terminate or suspend your access to the Services, in whole or in
            part, at any time, for any reason or no reason, with or without notice,
            and without liability to you. Upon termination, your right to use the
            Services will immediately cease. All provisions of these Terms that by
            their nature should survive termination shall survive, including without
            limitation ownership provisions, warranty disclaimers, indemnity, and
            limitations of liability.
          </p>
        </div>

        <div>
          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is held to be invalid, illegal, or
            unenforceable by a court of competent jurisdiction, such provision shall
            be modified to the minimum extent necessary to make it valid and
            enforceable, or if modification is not possible, shall be severed from
            these Terms. The remaining provisions shall continue in full force and
            effect.
          </p>
        </div>

        <div>
          <h2>16. Entire Agreement</h2>
          <p>
            These Terms, together with the Privacy Policy and any other legal
            notices or policies published by us on the Services, constitute the
            entire agreement between you and Bottle Rocket Labs II, LLC regarding
            the Services and supersede all prior and contemporaneous understandings,
            agreements, representations, and warranties.
          </p>
        </div>

        <div>
          <h2>17. Waiver</h2>
          <p>
            The failure of the Company to enforce any right or provision of these
            Terms shall not constitute a waiver of such right or provision. Any
            waiver of any provision of these Terms will be effective only if in
            writing and signed by the Company.
          </p>
        </div>

        <div>
          <h2>18. Contact Information</h2>
          <p>
            All notices, requests, and other communications regarding these Terms
            should be directed to:
          </p>
          <p className="mt-2">
            Bottle Rocket Labs II, LLC
            <br />
            Email: bill@billsai.club
            <br />
            Location: Hillsborough, North Carolina
          </p>
        </div>
      </section>
    </main>
  );
}
