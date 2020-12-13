import React from 'react';
import PropTypes from 'prop-types';

export const Intro = ({ num, showTitle = true }) => {
  console.log(num, showTitle)
  const renderContent = num => {
    let content = null;

    switch(num) {
      case "1":
        content = (
          <div className="flex flex-col space-y-6">
            <p>
              This course is not a quick solution to get laid. If you&apos;re looking for...
            </p>
            <p>
              &apos;Tricks&apos; and &apos;techniques&apos; for dating and relationships.
              Say this. Do that. Call her this day. Touch her here.
              Pretend like you don&apos;t know her until she calls you back.
              That kind of stuff - Slimy stuff. Stupid stuff. This is not that kind of course.
            </p>
            <p>
              It&apos;s going to take time to get what you want.
              Nothing sustainable is going to work for you in 2 days, 1 month, three months.
              Unless you keep on practicing each and every day.
            </p>
            <p>
              My private coaching program is for folks who like you,
              are looking to acquire the skill to talk to women,
              become more attractive to them, and have an abundance of women around you.
            </p>
            <p>
              I will show you what&apos;s wrong, what to do about it,
              and hold you accountable to making progress.
            </p>
          </div>
        );
        break;
      case "2":
        content = (
          <div className="flex flex-col space-y-6">
            <p>
              Going out and taking action on your own.
              Dealing with approach anxiety and what to do on your own.
              Not to mention not knowing what you did wrong, or knowing how to improve.
              Getting to the next level (even if you’re just starting out) can be a b***.
            </p>
            <p>
              Here&apos;s the harsh truth about learning game:
              Some guys make massive leaps and get insane results in a matter of months,
              while most spend long periods of time stuck in mediocrity,
              repeating easily fixable mistakes over and over again.
            </p>
            <p>
              it took me 3 years to &apos;start&apos; to approach girls by myself.
              I&apos;ve been through it all, I did the solo cold approaches,
              I faced the anxiety, fear, and pain of rejection.
            </p>
            <p>
              So, do you want to go through that all alone?
              Or do you want to accelerate your timeline and get more dates sooner rather than later?
            </p>
            <p>
              Based on real world experiences, I will show you how to meet,
              attract, and be around more women.
              THE NO-BULLSHIT SIMPLE WAY TO MEET WOMEN
              (Much cheaper than your current methods to meet women).
            </p>
          </div>
        );
        break;
      default:
        content = null;
    }

    return content;
  }
  return (
    <div className="my-20">
      {showTitle && (
        <div className="text-center">
          <p className="
            mb-4
          text-red-500
            font-bold
          ">
            View your first day:
          </p>
          <p className="
            mb-4
            text-3xl
            font-extrabold
          ">
            Who is the program for?
          </p>
          <div className="w-6/12 mx-auto">
            <p className="mb-12">
              Learn approach is an in-person weekend bootcamp program for men
              who want to confidently talk to and date more women.
            </p>
          </div>
        </div>
      )}
      {renderContent(num)}
    </div>
  );
}

Intro.propTypes = {
  num: PropTypes.string,
  showTitle: PropTypes.bool
}