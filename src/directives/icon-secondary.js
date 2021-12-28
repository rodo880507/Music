export default {
  beforeMount(el, binding) {
    let iconClass = `fas fa-${binding.value.icon} text-gray-600`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
