import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'privacy-policy-component',
    standalone: true,
    imports: [CommonModule, MaterialModule],
    styles: ['p { font-weight: bold; }'],
    template: `
        <mat-card class="mb-2">
            <mat-card-content class="text-center"
                ><h1>Privacy policy</h1></mat-card-content
            >
        </mat-card>
        <div class="mb-2">
            <mat-card>
                <mat-card-content>
                    <div class="postcontent nobottommargin clearfix nosidebar">
                        <a
                            href="/learn"
                            class="button button-border button-border-thin button-button-rounded tag"
                        ></a>
                        <h1 class="nobottommargin">Model World</h1>
                        <h2 class="subtitle nobottommargin">Privacy Policy</h2>
                        <div class="sep"></div>
                        <div class="note"></div>
                        <p>
                            <strong>Disclaimer</strong> Be sure, this article is
                            not a substitute for professional legal advice.
                            Also, it does not create an attorney and client
                            relationship. This article acts as a guide for
                            users.
                        </p>
                        <p>
                            On the legal side of things, if you want to make
                            your Online Business well protected and increase
                            trust between you and your customer base, having a
                            Privacy Policy is very important. While it should be
                            a legal document, it should also be easy to
                            understand for a customer and/or visitor that
                            interacts with your website.
                        </p>
                        <p>
                            To help you get started, we have created a sample
                            Privacy Policy that you can use by inserting your
                            relevant details and publishing it on your Website.
                        </p>
                        <hr />
                        <h2 id="store-name-privacy-policy">
                            (Store Name) Privacy Policy
                        </h2>
                        <p>
                            This Privacy Policy describes how your personal
                            information is collected, used, and shared when you
                            visit or make a purchase from (Store URL).
                        </p>
                        <p>
                            <strong
                                >WHAT PERSONAL INFORMATION WE COLLECT</strong
                            >
                        </p>
                        <p>
                            When you visit the Site, we automatically collect
                            certain information about your device, including
                            information about your web browser, IP address, time
                            zone, and some of the cookies that are installed on
                            your device.
                        </p>
                        <p>
                            Additionally, as you browse the Site, we collect
                            information about the individual web pages or
                            products that you view, what websites or search
                            terms referred you to the Site, and information
                            about how you interact with the Site. We refer to
                            this automatically collected information as
                            <strong>Device Information</strong>.
                        </p>
                        <p>
                            We collect Device Information using the following
                            technologies:
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Cookies</strong> are data files that
                                    are placed on your device or computer and
                                    often include an anonymous unique
                                    identifier.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Log files</strong> track actions
                                    occurring on the Site, and collect data
                                    including your IP address, browser type,
                                    Internet service provider, referring/exit
                                    pages, and date/time stamps.
                                </p>
                            </li>
                        </ul>
                        <p>
                            <em
                                >Mention all other tracking tools and/or
                                technologies being used by your website.</em
                            >
                        </p>
                        <p>
                            Also, when you make a purchase or attempt to make a
                            purchase through the Site, we collect certain
                            information from you, including your name, billing
                            address, shipping address, payment information
                            including credit card numbers
                            <em>Mention all types of accepted payments</em>,
                            email address, and phone number. This is called
                            <strong>Order Information</strong>.
                        </p>
                        <p>
                            <em
                                >Make sure you mention all other information
                                that you collect.</em
                            >
                        </p>
                        <p>
                            By <strong>Personal Information</strong> in this
                            Privacy Policy, we are talking both about Device
                            Information and Order Information.
                        </p>
                        <p>
                            <strong
                                >HOW DO WE USE YOUR PERSONAL INFORMATION</strong
                            >
                        </p>
                        <p>
                            We use the Order Information that we collect
                            generally to fulfil any orders placed through the
                            Site (including processing your payment information,
                            arranging for shipping, and providing you with
                            invoices and/or order confirmations).
                        </p>
                        <p>Additionally, we use this Order Information to:</p>
                        <ul>
                            <li>Communicate with you.</li>
                            <li>
                                Screen our orders for potential risk or fraud.
                            </li>
                            <li>
                                When in line with the preferences you have
                                shared with us, provide you with information or
                                advertising relating to our products or
                                services.
                            </li>
                        </ul>
                        <p>
                            We use the Device Information that we collect to
                            help us screen for potential risk and fraud (in
                            particular, your IP address), and more generally to
                            improve and optimize our Site.
                        </p>
                        <p>
                            <strong>SHARING YOUR PERSONAL INFORMATION</strong>
                        </p>
                        <p>
                            We share your Personal Information with third
                            parties to help us use your Personal Information, as
                            described above.
                        </p>
                        <p>
                            We also use Google Analytics to help us understand
                            how our customers use (Store Name).
                            <a href="https://modelworldint.com" rel="nofollow"
                                >How Google uses your Personal Information</a
                            >.
                        </p>
                        <p>
                            Finally, we may also share your Personal Information
                            to comply with applicable laws and regulations, to
                            respond to a subpoena, search warrant or other
                            lawful requests for information we receive, or to
                            otherwise protect our rights.
                        </p>
                        <p><strong>BEHAVIOURAL ADVERTISING</strong></p>
                        <p>
                            We use your Personal Information to provide you with
                            targeted advertisements or marketing communications
                            we believe may be of interest to you.
                        </p>
                        <p>
                            <em
                                >Mention opt-out links from external services
                                such as:</em
                            >
                        </p>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/settings/?tab=ads"
                                    rel="nofollow"
                                    >Facebook</a
                                >
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/settings/ads/anonymous"
                                    rel="nofollow"
                                    >Google</a
                                >
                            </li>
                        </ul>
                        <p>You can opt out of targeted advertising…</p>
                        <p><strong>YOUR RIGHTS</strong></p>
                        <p>
                            If you are a European resident, you have the right
                            to access the personal information we hold about you
                            and to ask that your personal information is
                            corrected, updated, or deleted. If you would like to
                            exercise this right, please contact us.
                        </p>
                        <p>
                            Additionally, if you are a European resident we note
                            that we are processing your information in order to
                            fulfil contracts we might have with you (for example
                            if you make an order through the Site), or otherwise
                            to pursue our legitimate business interests listed
                            above.<br />
                            Please note that your information will be
                            transferred outside of Europe, including to Canada
                            and the United States.
                        </p>
                        <p><strong>DATA RETENTION</strong></p>
                        <p>
                            When you place an order through the Site, we will
                            maintain your Order Information for our records
                            unless and until you ask us to delete this
                            information.
                        </p>
                        <p><strong>MINORS</strong></p>
                        <p>
                            The Site is not intended for individuals under the
                            age of (CLEARLY MENTION AGE).
                        </p>
                        <p><strong>CHANGES</strong></p>
                        <p>
                            We may update this privacy policy from time to time
                            in order to reflect, for example, changes to our
                            practices or for other operational, legal or
                            regulatory reasons.
                        </p>
                        <p>
                            If you have questions and/or require more
                            information, do not hesitate to contact us
                            <strong>(Add Relevant contact information)</strong>.
                        </p>

                        <div class="share">
                            <div class="inside_share">
                                <div
                                    class="fancy-title title-dotted-border title-center"
                                >
                                    <h5>Share</h5>
                                </div>
                                <a
                                    href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fjumpseller.com%2Flearn%2Fsample-privacy-policy%2F"
                                    class="social-icon si-facebook"
                                    target="_blank"
                                >
                                    <i class="icon-facebook"></i>
                                    <i class="icon-facebook"></i>
                                </a>
                                <a
                                    href="https://twitter.com/share?url=https%3A%2F%2Fjumpseller.com%2Flearn%2Fsample-privacy-policy%2F&amp;text=A Sample Privacy Policy for E-commerce%20via%20@jumpseller"
                                    class="social-icon si-twitter"
                                >
                                    <i class="icon-twitter"></i>
                                    <i class="icon-twitter"></i>
                                </a>
                                <a
                                    href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https%3A%2F%2Fjumpseller.com%2Flearn%2Fsample-privacy-policy%2F."
                                    class="social-icon si-email3"
                                >
                                    <i class="icon-email3"></i>
                                    <i class="icon-email3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </mat-card-content>
            </mat-card>
        </div>
    `,
})
export class PrivacyPolicyComponent {}
