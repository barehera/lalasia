import React from "react";

import article1 from "../../../assets/article-detail-image-1.png";
import article2 from "../../../assets/article-detail-image-2.png";
import SectionLayout from "../../layouts/SectionLayout";
const ArticleTextSection = () => {
  return (
    <SectionLayout x={true} y={true}>
      <article className="grid lg:grid-cols-2  gap-4 lg:gap-10">
        <div className="text-paragraph text-sm lg:text-lg flex flex-col  gap-4 lg:gap-10 tracking-widest">
          <p>
            Commodo sodales at eget id dignissim amet consectetur adipiscing
            elit. At cursus magna libero turpis scelerisque tristique
            scelerisque mi. Sed nunc auctor faucibus vitae. Gravida erat nisi
            sed vulputate sed cum viverra enim pretium. Sed nunc consequat,
            tincidunt pharetra. Mattis quis egestas mi, malesuada morbi morbi
            porttitor porttitor. Faucibus nunc, turpis malesuada blandit feugiat
            porttitor feugiat pellentesque condimentum. At nisi, cursus sem
            blandit sed nunc phasellus. Placerat auctor tincidunt commodo auctor
            placerat viverra tortor quis eu. Pretium velit eu, massa tristique
            congue egestas. In arcu tellus tellus urna, orci gravida etiam
            velit, viverra. Convallis nunc sed tellus eget feugiat ultricies
            purus. Consectetur sollicitudin id eget facilisis hendrerit nibh.
          </p>
          <p>
            Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat
            tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis,
            consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla
            nec at. Faucibus ultricies pharetra, faucibus erat varius ornare.
            Viverra pharetra nibh leo et purus in et. Amet felis lectus
            consectetur duis ut orci. Sed vitae quam vel pretium urna, duis
            neque. Vitae commodo interdum adipiscing mi ultrices. Aliquam risus
            nibh tincidunt mauris faucibus gravida eleifend. Ornare tincidunt
            gravida sed adipiscing vel adipiscing turpis neque elementum. Donec
            duis malesuada quam vehicula. Mauris sem tellus vitae cursus
            pellentesque semper nam est erat. Vulputate dui nisi neque, morbi
            mauris id augue. Habitant ultrices egestas vitae eget mattis ipsum
            sed. Ornare porttitor lobortis mauris nulla et vitae risus augue
            commodo. Nunc placerat nascetur semper est facilisis. Arcu cum
            aliquam vitae sit ultrices. Aliquet amet elit nibh sapien a. Id eu
            sagittis est eu ornare.
          </p>
        </div>
        <div>
          <p className="text-paragraph text-sm lg:text-lg mb-10 tracking-widest">
            Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse
            facilisis facilisis ligula felis et a parturient aenean. Ac maecenas
            ultricies felis risus scelerisque duis posuere. Lectus tellus
            montes, ac sed diam. Habitant amet, leo cras dui ac eu magna. Sed
            neque lorem mi laoreet orci aliquam maecenas. Molestie enim, nulla
            egestas id metus quisque eget. Tempor ante hendrerit venenatis et
            pellentesque viverra. Ornare mattis dui viverra suspendisse habitant
            tempus ornare aliquam. Condimentum tellus cursus diam interdum. Quam
            dictum pellentesque vestibulum mi. Aliquet laoreet sem proin viverra
            nec, at. Malesuada aliquam quisque felis, faucibus. Diam duis nunc
            tincidunt integer risus sit parturient urna. Etiam sed id nisi,
            tempus fames. Tempor ultrices massa eleifend id aliquet integer.
            Phasellus felis convallis fames habitasse sagittis, dui tellus.
          </p>
          <img
            src={article1}
            alt="Article"
            className="w-full h-[200px] lg:h-[480px] object-covere"
          />
        </div>
      </article>
      <article className="mt-12">
        <h3 className="text-text text-base lg:text-2xl font-bold mb-3">
          Bedroom Collection
        </h3>
        <div className="text-paragraph text-sm lg:text-lg grid lg:grid-cols-2  gap-4 lg:gap-10 tracking-widest mb-12">
          <p>
            Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat
            tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis,
            consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla
            nec at. Faucibus ultricies pharetra, faucibus erat varius ornare.
            Viverra pharetra nibh leo et purus in et. Amet felis lectus
            consectetur duis ut orci.
          </p>
          <p>
            Praesent tempus vel urna suspendisse cursus. Ac proin vitae viverra
            lorem nulla mattis in. Urna diam accumsan quisque adipiscing
            sagittis, in. Adipiscing dolor, morbi placerat sit vitae ipsum amet
            consequat. Imperdiet lacus tempus, nibh eget metus, sed pellentesque
            mattis aenean.
          </p>
        </div>
        <img
          src={article2}
          alt="Article"
          className="w-full h-[200px] lg:h-[480px] object-cover mb-12"
        />
      </article>
      <article>
        <h3 className="text-text text-base lg:text-2xl font-bold mb-3">
          The Knot
        </h3>
        <div className="text-paragraph text-sm lg:text-lg tracking-widest grid lg:grid-cols-2  gap-4 lg:gap-10">
          <p>
            Praesent tempus vel urna suspendisse cursus. Ac proin vitae viverra
            lorem nulla mattis in. Urna diam accumsan quisque adipiscing
            sagittis, in. Adipiscing dolor, morbi placerat sit vitae ipsum amet
            consequat. Imperdiet lacus tempus, nibh eget metus, sed pellentesque
            mattis aenean.
          </p>
          <p>
            Nisi quam mi est et et. Lectus sed imperdiet non vestibulum volutpat
            tellus odio aliquam. Eu rutrum tincidunt risus felis sagittis,
            consequat, iaculis tortor bibendum. At nisl, diam a sagittis nulla
            nec at. Faucibus ultricies pharetra, faucibus erat varius ornare.
            Viverra pharetra nibh leo et purus in et. Amet felis lectus
            consectetur duis ut orci.
          </p>
        </div>
      </article>
    </SectionLayout>
  );
};

export default ArticleTextSection;
