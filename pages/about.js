import Meta from "components/meta";
import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/two-column";
import Image from "next/image";
import eyecatch from "images/about.jpg";

export default function About() {
  return (
    <Container>
      <Meta pageTitle="アバウト" pageDesc="About development activities"/>

      <Hero title="About" subtitle="About development activities" />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>

      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>text text text text text text text text text text</p>
            <h2>モノづくりで目指していること</h2>
            <p>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text
            </p>
            <p>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text
            </p>
            <h3>新いしいことへのチャレンジ</h3>
            <p>
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text
            </p>
          </PostBody>
        </TwoColumnMain>

        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
