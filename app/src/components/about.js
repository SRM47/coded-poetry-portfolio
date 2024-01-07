import SectionTitle from "./sectionTitle";

function About() {
  return (
    <div className="border-4">
      <SectionTitle title="About"/>
      <div className="border-2 my-2 px-6 py-2">
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nulla
          metus, elementum at est a, feugiat sagittis turpis. Quisque tempus
          tristique nibh, quis laoreet augue gravida in. Vestibulum rutrum, elit
          et laoreet bibendum, est magna tincidunt ipsum, in volutpat elit ipsum
          fermentum dui. Suspendisse hendrerit vestibulum massa et dignissim.
          Mauris congue ligula a vehicula maximus. Morbi ultrices finibus erat
          ut tempus. Suspendisse elementum justo ut risus ultrices, a imperdiet
          sapien pulvinar. Nulla facilisi. Morbi eros diam, pretium eu sem ut,
          accumsan sodales nisl. Ut magna ipsum, ornare id turpis sit amet,
          semper pellentesque erat. Nam congue arcu eu massa viverra congue.
          Mauris ut ultricies nibh. Proin finibus lacus non ipsum porttitor, eu
          blandit purus luctus. Proin in ex pretium, iaculis sem in, convallis
          massa. Cras vehicula eleifend augue at sagittis.
        </p>
      </div>
    </div>
  );
}

export default About;
