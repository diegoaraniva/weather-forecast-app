module.exports = {
    content: [
      "./src/**/*.{html,ts}", // Asegúrate de que esto cubra tus archivos donde uses clases de Tailwind
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'), // Agrega DaisyUI como plugin de Tailwind
    ],
  }