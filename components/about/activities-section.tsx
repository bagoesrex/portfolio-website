import MaxWidthWrapper from "../layout/max-width-wrapper";
import MusicActivity from "./music-activity";

export default function ActivitiesSection() {
  return (
    <section id="activites">
      <MaxWidthWrapper className="space-y-4 pb-10">
        <h2 className="text-primary text-2xl font-extrabold">Activities</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <MusicActivity />
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
