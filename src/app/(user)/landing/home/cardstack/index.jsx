"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
import { GlobeDemo } from "../globe";
export function CardStackDemo() {
  return (
    <div className="flex flex-row items-center justify-center py-20  h-screen md:h-[35rem] bg-transparent relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        {/* <div>
          <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
            Our following principles
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
            Follow saying of the great. To become great.
          </p>
        </div> */}
        <div className="absolute w-full bottom-0 inset-x-0 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="relative w-full justify-center items-center flex md:h-full ">
          <CardStack items={CARDS} />
        </div>
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-orange-100 text-orange-700 dark:bg-orange-700/[0.2] dark:text-orange-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Steve Jobs",
    designation: "CEO, Apple Inc.",
    content: (
      <p>
        "A great designer instinctively{" "}
        <Highlight> understands what users want even if they don't.</Highlight>"
        – This quote emphasizes the importance of understanding your clients'
        needs.
      </p>
    ),
  },
  {
    id: 1,
    name: "Bill Gates",
    designation: "Co-founder of Microsoft",
    content: (
      <p>
        "The best way to predict the future is to invent it." – This quote
        highlights the{" "}
        <Highlight>
          importance of innovation and taking initiative in business .{" "}
        </Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Warren Buffett",
    designation: "CEO, Berkshire Hathaway",
    content: (
      <p>
        "It takes 20 years to build a reputation and five minutes to ruin it. If
        you think about that, you'll do things differently." –{" "}
        <Highlight>
          This quote emphasizes the importance of building and maintaining trust
          with clients and partners.
        </Highlight>
      </p>
    ),
  },
  {
    id: 3,
    name: "Oprah Winfrey",
    designation: "Talk Show Host, Media Mogul",
    content: (
      <p>
        "The key to success is to focus on what you do best and then delegate
        the rest." –{" "}
        <Highlight>
          This quote highlights the importance of identifying your strengths and
          building a strong team.
        </Highlight>
      </p>
    ),
  },
  {
    id: 4,
    name: "Jeff Bezos",
    designation: "Founder and CEO, Amazon",
    content: (
      <p>
        "If you{" "}
        <Highlight>
          obsess over customer experience, you will eventually win over your
          customers.
        </Highlight>
        " – This quote emphasizes the importance of putting the customer first
        and creating a positive user experience.
      </p>
    ),
  },
];
