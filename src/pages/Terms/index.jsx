import React, { useLayoutEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import styles from './terms.module.css';

const Terms = () => {
  useDocumentTitle('Terms of use');
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms of use</h1>
        {/* heading */}
        <h2 className={styles.subTitle}>DIMENSION NXG’S PVT. LTD. WEBSITE TERMS OF USE</h2>

        {/* heading1 */}
        <p className={styles.heading}>For AjnaLens Branded Product Only</p>
        <article className={styles.bodyText}>
          The services that DIMENSION NXG PVT. LTD. (HEREINAFTER “Company”) provides to User is subject to the following
          Terms of Use (“TOU”). DIMENSION NXG reserves the right to update, modify, change, at its sole discretion, the
          TOU, or any part thereof, applicable to it’s website “www.ajnalens.com” (hereinafter “website”), at any time
          without notice to the User. The most current version of the TOU can be reviewed by clicking on the “Terms of
          Use” hypertext link located on website. The continued use of the website by the User of the current version
          (including modifications made to TOU) will imply acceptance and agreement of the User to the previous or
          updated TOU, as applicable.
          <br />
          <br />
          <ol type="A">
            <li>
              This Agreement, which incorporates by reference other provisions applicable to use of (“website”),
              including, but not limited to, supplemental terms and conditions set forth hereof (“Supplemental Terms”),
              governing the use of certain specific material contained in website, sets forth the terms and conditions
              that apply to use of website by User. By using the website (other than to read this Agreement for the
              first time), User agrees to comply with all of the terms and conditions hereof. The right to use the
              website is personal to User and is not transferable to any other person or entity. User is responsible for
              all use of User’s Account and for ensuring that all use of User’s Account complies fully with the
              provisions of this Agreement. User shall be responsible for protecting the confidentiality of User’s
              password(s), if any.
            </li>
            <br />
            <li>
              The Company shall have the right at any time to change or discontinue any aspect or feature of the
              website, including, but not limited to, content, hours of availability, and equipment needed for access or
              use.
            </li>
          </ol>
        </article>

        {/* ordered List */}

        <ol type="1">
          <li className={styles.heading}>DESCRIPTION OF SERVICES</li>
          <article className={styles.bodyText}>
            Through the use of its Web property, the Company provides User with access to a variety of resources,
            including download areas, communication forums and product information (collectively “Services”). The
            Services, including, any updates, enhancements, new features, and/or the addition of any new Web properties,
            are subject to the TOU.
          </article>
          <li className={styles.heading}> EQUIPMENT</li>
          <article className={styles.bodyText}>
            User shall be responsible for obtaining and maintaining all telephone, computer hardware, software and other
            equipment needed for access to and use of the website and all charges related thereto.
          </article>
          <li className={styles.heading}>USER CONDUCT</li>
          <ol type="A">
            <li className={styles.bodyText}>
              User shall use the website for lawful purposes only. User shall not post or transmit through the website
              any material which violates or infringes in any way upon the rights of others, which is unlawful,
              threatening, abusive, defamatory, invasive of privacy or publicity rights, vulgar, obscene, profane, or
              otherwise objectionable, which encourages conduct that would constitute a criminal offense, give rise to
              civil liability or otherwise violate any law, or which, without the Company’s express prior approval
              contains advertising or any solicitation with respect to products or services.
            </li>
            <br />
            <li className={styles.bodyText}>
              Any conduct by a User that in the Company’s discretion restricts or inhibits any other User from using or
              enjoying the website will not be permitted. User shall not use the website to advertise or perform any
              commercial solicitation, including, but not limited to, the solicitation of users to become subscribers of
              other on-line information services competitive with the Company.
            </li>
            <br />
            <li className={styles.bodyText}>
              The website (WA) contains copyrighted material, trademarks and other proprietary information, including,
              but not limited to, text, software, photos, video, graphics, user interfaces, visual interfaces, music and
              sound, trademarks logos, artwork, including but not limited to the selection, coordination, arrangement
              and enhancement of such information. User may not modify, publish, reproduce, upload, post, participate in
              the transfer of sale, create derivative works, or in any way exploit or distribute, any of the information
              or content, in whole or in part. User may download copyrighted material for user’s personal non-commercial
              informational use only. Except as otherwise expressly permitted under copyrighted law, no copying,
              redistribution, retransmission, publication or commercial exploitation of downloaded material will be
              permitted. User acknowledges that it does not acquire any ownership rights by downloading copyrighted
              material.
            </li>
            <br />
            <li className={styles.bodyText}>
              User is not permitted to use any deep-link, page-scrape, robot, spider, or other automatic device,
              program, software, algorithm or any other equivalent process that attempts to copy, access, acquire,
              monitor any portion of information or try to gain unauthorized access to any portion or feature on the
              website in order to obtain material or information through any means not purposely made available through
              the site. User is not allowed to breach security or authentication measures on the website. Further, User
              may not reverse look-up, trace or seek to trace any information of any other user to its source, in any
              way where the purpose is to reveal any information, including but not limited to personal identification
              or personally identifiable information, other than your own information, as provided for by the website.
            </li>
            <br />
            <li className={styles.bodyText}>
              User shall not upload, post or otherwise make available on the website any material protected by
              copyright, trademark, or other proprietary right without the express permission of the owner of the
              copyright, trademark or other proprietary right and the burden of determining that any material is not
              protected by copyright rests with User User shall be solely liable for any damage resulting from any
              infringement of copyrights, proprietary right, or any other harm resulting from such a submission. By
              submitting material to any public area of the website, User automatically grants, or warrants that the
              owner of such material has expressly granted the Company the royalty free, perpetual, irrevocable,
              non-exclusive right and license to use, reproduce, modify, adapt, publish, translate and distribute such
              material (in whole or in part) worldwide and/or to incorporate it in other works in any form, media or
              technology now known or hereafter developed for the full term of any copyright that may exist in such
              material. User also permits any other User to access, view, store or reproduce the material for that
              User’s personal use. User hereby grants the Company the right to edit, copy, publish and distribute any
              material made available on the website by User.
            </li>
            <br />
          </ol>

          <li className={styles.heading}>USE OF SERVICES</li>
          <article className={styles.bodyText}>
            The Services may contain email services, bulletin board services, chat areas, news groups, forums
            communities, personal web pages, calendars, photo albums, file cabinets and/or other message or
            communication facilities designed to enable User to communicate with others (such as “Communication
            Services”). User agree to use the Communication services only to post, send and receive messages and
            material that are proper and when applicable, related to the particular Communication Service. By way of
            example, and not as a limitation, User agrees that when using the Communication Services, User will not:
          </article>
          <br />
          <ul className={styles.bodyText}>
            <li>
              Use the Communication Services in connection with surveys, contests, pyramid schemes, chain letters, junk
              email, spamming or any duplicative or unsolicited messages (commercial or otherwise)
            </li>
            <li>
              Defame, abuse, harass, stalk, threaten or otherwise violate the legal rights (such as rights of privacy
              and publicity) of others
            </li>
            <li>
              Publish, post, upload, distribute or disseminate any inappropriate, profane, defamatory, obscene, indecent
              or unlawful topic, name, material or information
            </li>
            <li>
              Upload, or otherwise make available, files that contain images, photographs, software or other material
              protected by intellectual property laws, including, by way of example, and not as limitation, copyright or
              trademark laws (or by rights of privacy or publicity) unless User own or control the rights thereto or
              have received all necessary consent to do the same
            </li>
            <li>
              Use any material or information, including images or photographs, which are made available through the
              Services in any manner that infringes any copyright, trademark, patent, trade secret, or other proprietary
              right of any party
            </li>
            <li>
              Upload files that contain viruses, Trojan horses, worms, time bombs, cancelbots, corrupted files, or any
              other similar software or programs that may damage the operation of another’s computer or property of
              another
            </li>
            <li>
              Advertise or offer to sell or buy any goods or services for any business purpose, unless such
              Communication Services specifically allow such messages
            </li>
            <li>
              Download any file posted by another user of a Communication Service that User know, or reasonably should
              know, cannot be legally reproduced, displayed, performed, and/or distributed in such manner
            </li>
            <li>
              Falsify or delete any copyright management of information, such as author attributions, legal or other
              proper notices or proprietary designations or labels of the origin or proprietary designations or labels
              of the origin or source of software or other material contained in a file that is uploaded
            </li>
            <li>
              Violate any code of conduct or other guidelines which may be applicable for any particular Communication
              Service
            </li>
            <li>Harvest or otherwise collect information about others, including email addresses</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Create a false identity for the purpose of misleading others</li>
          </ul>
          <br />
          <article className={styles.bodyText}>
            The Company has no obligation to monitor the Communication Services. However, the Company reserves the right
            to revise materials posted to the Communication Services and to remove any materials in its sole discretion.
            The Company reserves the right to terminate User’s access to any or all of the Communication Services at any
            time, without notice, for any reason whatsoever. The Company reserves the right at all times to disclose any
            information as it deems necessary to satisfy any applicable law, regulation, legal process or governmental
            request, or to edit, refuse to post or to remove any information or materials, in whole or in part, in
            Company’s sole discretion.
          </article>
          <br />
          <article className={styles.bodyText}>
            Materials uploaded to the Communication Services may be subject to posted limitations on usage, reproduction
            and/or dissemination; User is responsible for adhering to such limitations if User downloads the materials.
            Always use caution when giving out any personally identifiable information in any Communication Services.
            The Company does not control or endorse the content, messages or information found in any Communication
            Services.
          </article>
          <li className={styles.heading}>MEMBER ACCOUNT, PASSWORD, AND SECURITY</li>
          <article className={styles.bodyText}>
            If any of the Services requires User to open an account, User must complete the registration process by
            providing the Company with current, complete and accurate information as prompted by the applicable
            registration form. User also will choose a password and a user name. User is entirely responsible for
            maintaining the confidentiality of User’s password and account. Furthermore, User is entirely responsible
            for any and all activities that occur under User’s account. User agrees to notify the Company immediately of
            any unauthorized use of User’s account or any other breach of security. The Company will not be liable for
            any loss that User may incur as a result of someone else using user’s password or account, either with or
            without User’s knowledge. However, User could be held liable for losses incurred by the Company or another
            party due to someone else using User’s account or password. Also, User may not use anyone else’s account at
            any time, without the permission of the account holder.
          </article>
          <li className={styles.heading}>NOTICE SPECIFIC TO DOCUMENTS AVAILABLE ON THE WEBSITE</li>
          <article className={styles.bodyText}>
            Permission to use Documents (such as white papers, press releases, datasheets, and FAQs) from the Services
            is granted, provided that (1) the below copyright notice appears in all copies and that both the copyright
            notice and this permission notice appear, (2) use of such Documents from the Services is for informational
            and non-commercial or personal use only and will not be copies or posted on any network computer or
            broadcast in any media, and (3) no modifications of any Documents are made.
          </article>
          <br />
          <article className={styles.bodyText}>
            THE COMPANY AND/OR ITS RESPECTIVE SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY OF THE INFORMATION
            CONTAINED IN THE DOCUMENTS AND RELATED GRAPHICS PUBLISHED AS PART OF THE SERVICES FOR ANY PURPOSE. ALL SUCH
            DOCUMENTS AND RELATED GRAPHICS ARE PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND. THE COMPANY AND/OR
            RESPECTIVE SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION,
            INCLUDING ALL WARRANTIES AND CONDITIONS OF MERCHANTABILITY, WHETHER EXPRESS, IMPLIED OR STATUTORY, FITNESS
            FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE COMPANY AND/OR ITS RESPECTIVE
            SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING
            FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT NEGLIGENCE OR OTHER TORTIOUS ACTION,
            ARISING OUT OF OR IN CONNECTION WITH THE USER OR PERFORMANCE OF INFORMATION AVAILABLE FROM THE SERVICES.
          </article>
          <br />
          <article className={styles.bodyText}>
            THE DOCUMENTS AND RELATED GRAPHICS PUBLISHED ON THE SERVICES COULD INCLUDE TECHNICAL INACCURACIES OR
            TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. THE COMPANY AND/OR ITS
            RESPECTIVE SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE PRODUCTS(S) AND/OR THE PROGRAM(S) DESCRIBED
            HEREIN AT ANY TIME.
          </article>

          <li className={styles.heading}>DISCLAIMER OF WARRANTY; LIMITATION OF LIABILITY</li>

          <ol type="A" className={styles.bodyText}>
            <li>
              USER EXPRESSLY AGREES THAT USE OF THE WEBSITE IS AT USER’S SOLE RISK. NEITHER THE COMPANY, ITS AFFILIATES
              NOR ANY OF THEIR RESPECTIVE EMPLOYEES, AGENTS, THIRD PARTY CONTENT PROVIDERS OR LICENSORS WARRANT THAT THE
              WEBSITE WILL BE UNINTERRUPTED OR ERROR FREE, NOR DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE
              OBTAINED FROM USE OF THE WEBSITE, OR AS TO THE ACCURACY, RELIABILITY OR CONTENT OF ANY INFORMATION,
              SERVICE, OR MERCHANDISE PROVIDED THROUGH THE WEBSITE.
            </li>
            <br />
            <li>
              THE WEBSITE IS PROVIDED ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
              INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR
              A PARTICULAR PURPOSE, OTHER THAN THOSE WARRANTIES WHICH ARE IMPLIED BY AND INCAPABLE OF EXCLUSION,
              RESTRICTION OR MODIFICATION UNDER THE LAWS APPLICABLE TO THIS AGREEMENT.
            </li>
            <br />
            <li>
              THIS DISCLAIMER OF LIABILITY APPLIES TO ANY DAMAGES OR INJURY CAUSED BY ANY FAILURE OF PERFORMANCE, ERROR,
              OMISSION, INTERRUPTION, DELETION, DEFECT, DELAY IN OPERATION OR TRANSMISSION, COMPUTER VIRUS,
              COMMUNICATION LINE FAILURE, THEFT OR DESTRUCTION OR UNAUTHORIZED ACCESS TO, ALTERATION OF, OR USE OF
              RECORD, WHETHER FOR BREACH OF CONTRACT, TORTIOUS BEHAVIOR, NEGLIGENCE, OR UNDER ANY OTHER CAUSE OF ACTION.
              USER SPECIFICALLY ACKNOWLEDGES THAT THE COMPANY IS NOT LIABLE FOR THE DEFAMATORY, OFFENSIVE OR ILLEGAL
              CONDUCT OF OTHER USERS OR THIRD PARTIES AND THAT THE RISK OF INJURY FROM THE FORTHGOING REST ENTIRELY WITH
              USER.
            </li>
            <br />
            <li>
              IN NO EVENT WILL THE COMPANY, OR ANY PERSON OR ENTITY INVOLVED IN CREATING, PRODUCING OR DISTRIBUTING THE
              WEBSITE OR THE COMPANY SOFTWARE BE LIABLE FOR ANY DAMAGES, INCLUDING, WITHOUT LIMITATION, DIRECT,
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES ARISING OUT OF THE USE OF OR INABILITY TO
              USE THE WEBSITE. USER HEREBY ACKNOWLEDGES THAT THE PROVISIONS OF THIS SECTION SHALL APPLY TO ALL CONTENT
              ON THE WEBSITE.
            </li>
            <br />
            <li>
              IN ADDITION TO THE TERMS SET FORTH ABOVE NEITHER THE COMPANY NOR ITS AFFILIATIONS, INFORMATION PROVIDERS
              OR CONTENT PARTNERS SHALL BE LIABLE REGARDLESS OF THE CAUSE OR DURATION, FOR ANY ERRORS, INACCURACIES,
              OMISSIONS, OR OTHER DEFECTS IN OR UNAUTHENTICITY OF THIS INFORMATION CONTAINED WITHIN THE WEBSITE, OR OF
              ANY DELAY OR INTERRUPTION IN THIS TRANSMISSION THEREOF TO THE USER, OR FOR ANY CLAIMS OR LOSSES ARISING
              THEREFROM OR OCCASIONED THEREBY, NONE OF THE FOREGOING PARTIES SHALL BE LIABLE FOR ANY THIRD PARTY CLAIMS
              OR LOSSES OF ANY NATURE, INCLUDING, BUT NOT LIMITED TO, LOST PROFITS, PUNITIVE OR CONSEQUENTIAL DAMAGES.
            </li>
            <br />
            <li>
              FORCE MAJEURE: NEITHER PARTY WILL BE RESPONSIBLE FOR ANY FAILURE OR DELAY IN PERFORMANCE DUE TO
              CIRCUMSTANCES BEYOND ITS REASONABLE CONTROL, INCLUDING, WITHOUT LIMITATION, ACT OF GOD, WAR, RIOT, ACTS OF
              CIVIL OR MILITARY AUTHORITIES, FIRE, FLOODS, ACCIDENTS RESULTING FROM EQUIPMENT AND/OR SOFTWARE FAILURE
              AND/OR TELECOMMUNICATIONS FAILURES, POWER FAILURES, NETWORK FAILURES, FAILURES OF THIRD-PARTY SERVICE
              PROVIDERS (INCLUDING PROVIDERS OF INTERNET SERVICES AND TELECOMMUNICATIONS). THE PARTY AFFECTED BY ANY
              SUCH EVENT SHALL NOTIFY THE OTHER PARTY WITHIN A MAXIMUM OF FIFTEEN (15) FAYS FROM ITS OCCURRENCE. THE
              PERFORMANCE OF THIS AGREEMENT SHALL THEN BE SUSPENDED FOR AS LONG AS ANY SUCH EVENT SHALL PREVENT THE
              AFFECTED PARTY FROM PERFORMING ITS OBLIGATIONS UNDER THIS AGREEMENT.
            </li>
          </ol>

          <li className={styles.heading}>LINKS TO THIRD PARTY SITES</li>
          <article className={styles.bodyText}>
            The links in this area will let you leave the website. The linked sites are not under control of the Company
            and the Company is not responsible for the contents of any linked site or any link contained in a linked
            site, or any changes or updates to such sites. The Company is not responsible for webcasting or any other
            form of transmissions received from any linked site. The Company is providing these links to you only as a
            convenience, and the inclusion of any link does not imply endorsement by the company of the site. Under no
            circumstances will the Company be liable for any loss or damage caused by a user’s reliance on information
            obtained through the website. It is the responsibility of the User to evaluate the accuracy, completeness or
            usefulness of any information, opinion. Advice or other content available through the Company.
          </article>

          <li className={styles.heading}>PRIVACY</li>
          <ol type="A" className={styles.bodyText}>
            <li>
              The Company respects User privacy, their ability to know, access, correct, transfer, restrict the
              processing of, and delete the personal data. The Company acknowledges the significance of helping Users
              retain their privacy whenever they visit the website. To protect User’s privacy, the Company follows
              different principles in accordance with worldwide practices for privacy and data protection.
            </li>
            <li>
              The Company won’t sell or give away User’s name, mail address, phone number, email address or any other
              information to anyone.
            </li>
            <li>
              The Company will use state of the art security measures to protect User information from unauthorized
              users. The Company takes strong measures to protect the personal information and to ensure that User data
              is protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction.
            </li>
            <li>
              However, by using the Company website, User acknowledge and agree that Internet transmissions are never
              completely private or secure. You understand that any message or information you send to the website may
              be read or intercepted by others, even if there is a special notice that a particular transmission is
              encrypted.
            </li>
          </ol>

          <article className={styles.bodyText}>
            NOTICE: The Company will ask the User whenever information is needed that personally identifies the User or
            allows the Company to contact the User. Generally, this information is requested when the User gets
            registered to the website or downloads a free software, enters a contest, provides feedback, orders or
            subscribes to email newsletters or gets involved with any such similar activity while using the website. The
            personal information is then primarily used a) to make the website easier for the User to access by not
            having to enter information more than once; b) to help user quickly find software, services or information;
            c) to help the Company create content relevant to the User; d) to alert the User to product upgrades,
            special offers, updated information and other new services or products offered by the Company
          </article>
          <br />
          <article className={styles.bodyText}>
            If the User chooses not to register or provide personal information, he can still use most of the website,
            but will not be able to access areas or content that require registration.
          </article>
          <ol type="1">
            <li className={styles.heading}>MONITORING</li>
            <article className={styles.bodyText}>
              The Company shall have the right, but not the obligation, to monitor the content of the website, including
              chat rooms and forums, to determine compliance with this Agreement and any operating rules established by
              the Company and to satisfy any law, regulation or authorized government request. The Company shall have
              the right in its sole discretion to edit, refuse to post or remove any material submitted to or posted on
              the website. Without limiting the foregoing, the Company shall have the right to remove any material that
              the Company, in its sole discretion, finds to be in violation of the provisions hereof or otherwise
              objectionable.
            </article>
            <li className={styles.heading}>INDEMNIFICATION</li>
            <article className={styles.bodyText}>
              User agrees to defend, indemnify and hold harmless the Company, its affiliates and their respective
              directors, officers, employees and agents from and against all claims and expenses, including attorney’s
              fees, arising out of the use of Company by User or User’s Account.
            </article>
            <li className={styles.heading}>TERMINATION</li>
            <article className={styles.bodyText}>
              Either the Company or User may terminate this Agreement at any time. Without limiting the foregoing, the
              Company shall have the right to immediately terminate User’s Account in the event of any conduct by User
              which the Company, in its sole discretion, considers to be unacceptable, or in the event of any breach by
              User of this Agreement.
            </article>

            <li className={styles.heading}>MISCELLANEOUS</li>
            <article className={styles.bodyText}>
              This Agreement and any operating rules for the website established by the Company constitute the entire
              agreement of the parties with respect to the subject matter hereof, and supersede all previous written or
              oral agreements between the parties with respect to such subject matter. This Agreement shall be construed
              in accordance with the laws of India, without regard to its conflict of laws rules. No waiver by either
              party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent
              breach or default. The section headings used herein are for convenience only and shall not be given any
              legal import.
            </article>
          </ol>
          <br />
          <br />
          <article className={styles.bodyText}>
            If any of the provisions of these Terms of Use are held by a competent jurisdiction to be void or
            unenforceable, such provisions shall be limited or eliminated to the minimum extent necessary and replaced
            with a valid provision that best embodies the intent of these Terms of Use, so that these Terms of Use shall
            remain in full force and effect.
          </article>
        </ol>
      </div>
    </div>
  );
};

export default Terms;
