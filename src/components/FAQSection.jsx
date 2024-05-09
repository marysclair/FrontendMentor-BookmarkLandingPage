import FAQBlock from "./FAQBlock";

export default function FAQSection() {
  return (
    <div className="mx-auto w-1/2 border-y-[3px] divide-y-[3px]">
      <FAQBlock text="What is Bookmark?" />
      <FAQBlock text="How can I request a new browser?" />
      <FAQBlock text="Is there a mobile app?" />
      <FAQBlock text="What about other Chromium browsers?" />
    </div>
  );
}
