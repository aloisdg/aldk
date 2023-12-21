import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Contact = () => {
  return (
    <Main meta={<Meta title="Contact" description="Me contacter" />}>
      <div className="max-w-screen-md mx-auto text-justify">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name" className="block">
              <span className="text-gray-700">Quel est votre nom ?</span>
              <input
                id="name"
                name="name"
                className="form-input mt-1 block w-full border-blue-500 border-b-2"
                placeholder="votre nom"
                aria-label="nom"
              />
            </label>
          </p>
          <p>
            <label htmlFor="name" className="block">
              <span className="text-gray-700">Quel est votre courriel ?</span>
              <input
                id="email"
                name="email"
                className="form-input mt-1 block w-full border-blue-500 border-b-2"
                placeholder="votre@courriel.fr"
                aria-label="courriel"
              />
            </label>
          </p>
          <p>
            <label htmlFor="message" className="block">
              <span className="text-gray-700">Quel est votre message ?</span>
              <textarea
                id="message"
                name="message"
                className="mt-1 block w-full border-blue-500 border-b-2"
                placeholder="votre demande"
                aria-label="message"
              />
            </label>
          </p>
          <p>
            <label htmlFor="name" className="block">
              <span className="text-gray-700">Quel est votre pays ?</span>
              <input
                id="pays"
                name="pays"
                className="form-input mt-1 block w-full border-blue-500 border-b-2"
                placeholder="France, Belgique, Palestine, Tibet, etc."
                aria-label="pays"
              />
            </label>
          </p>
          <p>
            <label htmlFor="name" className="block">
              <span className="text-gray-700">
                Quelle est votre ville et code postal ?
              </span>
              <input
                id="ville"
                name="ville"
                className="form-input mt-1 block w-full border-blue-500 border-b-2"
                placeholder="Nantes 44000"
                aria-label="ville"
              />
            </label>
          </p>
          <button
            className="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-900 focus:outline-none transition-colors duration-200"
            type="submit"
          >
            Prendre contact
          </button>
        </form>
      </div>
    </Main>
  );
};

export default Contact;
