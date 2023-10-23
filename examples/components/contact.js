import { spacing } from '@universityofmaryland/design-system-configuration/dist/configuration/tokens/layout.js';
import { CreateSlot } from '../helpers';
const SLOT_CONTACT_NAME = 'contact';
const CONTACT_CONTAINER = 'umd-footer-contact-container';
const CONTACT_LIST_CONTAINER = 'umd-footer-contact-contact-list';
export const ContactContainerStyles = `
  .${CONTACT_CONTAINER} {
    padding-left: ${spacing['2xl']};
  }
  
  .${CONTACT_CONTAINER} p {
    line-height: 1.2em;
  }
  
  .${CONTACT_CONTAINER} span {
    display: block;
  }
  
  .${CONTACT_CONTAINER} .umd-interactive-sans-medium {
    margin-bottom: ${spacing.min};
  }
  
  .${CONTACT_CONTAINER} .${CONTACT_LIST_CONTAINER} {
    display: flex;
    margin-top: ${spacing.min};
  }
  
  .${CONTACT_CONTAINER} .${CONTACT_LIST_CONTAINER} a:not(:first-child) {
    position: relative;
    margin-left: ${spacing.min};
    padding-left: ${spacing.min};
    position: relative;
    background-position: 10px 100%;
  }
  
  .${CONTACT_CONTAINER} .${CONTACT_LIST_CONTAINER} a:not(:first-child) > span {
    content: '';
    display: inline-block;
    height: 3px;
    width: 3px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
  }
`;
const makeLink = ({ url, title }) => {
    const link = document.createElement('a');
    const span = document.createElement('span');
    link.setAttribute('href', url);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.innerText = title;
    link.appendChild(span);
    return link;
};
const makeSpan = ({ text }) => {
    const span = document.createElement('span');
    span.innerHTML = text;
    return span;
};
export const CreateContactContainer = ({ element, }) => {
    const contactNode = element.querySelector(`[slot="${SLOT_CONTACT_NAME}"]`);
    const contactContainer = document.createElement('div');
    const hasChildren = contactNode ? contactNode.children.length > 0 : false;
    contactContainer.classList.add(CONTACT_CONTAINER);
    const makeContactSlot = () => {
        const contactSlot = CreateSlot({ type: SLOT_CONTACT_NAME });
        contactContainer.appendChild(contactSlot);
    };
    const makeDefaultSlot = () => {
        const defaultContactWrapper = document.createElement('div');
        const headline = document.createElement('p');
        const address = document.createElement('address');
        const addressParagraph = document.createElement('p');
        const contactList = document.createElement('p');
        const headlineLink = makeLink({
            url: 'https://www.usmd.edu/',
            title: 'The Flagship Institution of the State of Maryland',
        });
        headline.classList.add('umd-interactive-sans-medium');
        headline.appendChild(headlineLink);
        addressParagraph.appendChild(makeSpan({ text: 'Office of Marketing and Communications' }));
        addressParagraph.appendChild(makeSpan({ text: '2101 Turner Hall' }));
        addressParagraph.appendChild(makeSpan({ text: 'College Park, MD 20742' }));
        contactList.classList.add(CONTACT_LIST_CONTAINER);
        contactList.appendChild(makeLink({ url: 'mailto:omc@umd.edu', title: 'omc@umd.edu' }));
        contactList.appendChild(makeLink({ url: 'tel:3014051000', title: '301.405.1000' }));
        address.appendChild(addressParagraph);
        address.appendChild(contactList);
        contactContainer.appendChild(headline);
        contactContainer.appendChild(address);
        contactContainer.appendChild(defaultContactWrapper);
    };
    hasChildren ? makeContactSlot() : makeDefaultSlot();
    return contactContainer;
};
