export const CreateLinksLogoRow = ({ element }) => {
    const container = document.createElement('div');
    const lock = document.createElement('div');
    const wrapper = document.createElement('div');
    const socialColumnWrapper = CreateSocialCampaignColumns({ element });
    lock.classList.add('umd-lock');
    container.classList.add(MAIN_BOTTOM_CONTAINER);
    lock.appendChild(socialColumnWrapper);
    wrapper.appendChild(lock);
    container.appendChild(wrapper);
    return container;
};
