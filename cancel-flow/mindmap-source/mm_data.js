const L='live',N='new',C='chk';
const sol=(t,tag,cap,note)=>({k:'sol',t,tag,cap,note});
const note=(t)=>({k:'note',t});
const sub=(t,kids,cond)=>({k:'sub',t,cond,kids});
const comp=sol('Thank-you credits or days',N,15,'Given with the fix, once per plan period. % of monthly plan.');
const plus=sol('Every path also gets: thank-you credits or days (once per period) and a pause option',N,15,'Credits or days worth up to 15% of the monthly plan');
const escal=sol('Token of appreciation + feedback reviewed by a senior team member. Logged internally (feeds coach performance analysis; not mentioned to the member).',N,15,'Credits or days worth up to 15% of the monthly plan, once per plan period');
const pause=sol('Pause (2 weeks, 1 month, or a date)',L,null,'Credits and end date freeze. Applies to every Family or Duo account on the plan.');
module.exports={
 root:'Cancel flow',
 kids:[
 {k:'reason',t:'1. Not using it enough',hero:'Hero: this month\'s practice',kids:[
   sub('Barely started: under 4 h in a month',[
     note('Shows: hours vs month goal, cost per hour practised, unused credits (Shvasa Daily), onboarding goal, hours to Rookie level'),
     sol('10-day restart: practise 3 times in 10 days, earn days back',N,10,'Reward is days added, never cash. % of monthly plan.'),
     sol('Move to a lighter plan: price difference refunded, plan duration unchanged',L,null,'Offered when practice is under 4 h a month'),
     sol('Find a buddy',L,null,'Existing feature'),
     sol('Add time to unused credits (Shvasa Daily)',N,null,'Offered once per period'),
     sol('Pause (other plans)',L,null,'Replaces the credits option when the plan is not Shvasa Daily')],'Threshold is yours; 3, 4 or 5 h can be tried in the prototype'),
   sub('Slowing down: 4 h or more, trending down',[
     note('Shows: last 6 weeks by hour, busiest week vs last week, best streak is saved'),
     sol('10-day restart',N,10),
     sol('Find a buddy',L),
     pause])]},
 {k:'reason',t:'2. It renewed unexpectedly',hero:'Hero: the charge, days since, classes attended or booked since, auto-renew switch',kids:[
   sub('Within 7 days of renewal, nothing attended or booked',[
     note('Shows: refund breakdown in the open: charged, 10% third-party fee, you get back. Only while no class has been attended or booked on the renewed plan.'),
     sol('Move to a lighter plan: price difference refunded, plan duration unchanged',L,null,'Whether the 10% fee applies to the difference is to be confirmed.'),
     sol('Gift your remaining time to someone',N),
     sol('Switch billing (longer plans to monthly, monthly to 12 months)',L,null,'12 months is ₹3,333 a month against ₹4,999 on the monthly plan'),
     sol('Auto-renew switch on the page',L,null,'Switch off, keep access until end date')],'End access today = 90% back (10% third-party fee)'),
   sub('After 7 days, or already attended or booked on the renewed plan',[
     note('Shows: plainly that the refund policy no longer applies (window closed, or a class was attended or booked). A used plan is never refunded for unused time.'),
     sol('Move to a lighter plan: price difference refunded, plan duration unchanged',L),
     sol('Gift your remaining time to someone',N),
     sol('Auto-renew switch on the page',L)],'Ending today: no refund')]},
 {k:'reason',t:'3. The service was not up to the mark',hero:'Hero: 1 to 5 star rating and a free-text box. No category chips. Help shows once a rating is given.',kids:[
   sub('Private-plan members (detected from backend)',[
     sol('Try a new dedicated teacher: 2 free 60-minute classes',N,null,'Shown first. Cap treatment to be decided.'),
     escal]),
   sub('All other members (group plans: no teacher-change option, they can already choose any teacher)',[
     escal,
     sol('Complimentary 1:1 session',N,15)]),
   note('Rating and text are logged internally with the case (feeds coach performance analysis; not mentioned to the member).')]},
 {k:'reason',t:'4. It costs more than I want to spend',hero:'Hero: what your plan has built (classes, hours, streak), what is still waiting, what is included',kids:[
   note('No sub-reasons. Solutions show straight away. The discount line appears only for members with no practice in the last 30+ days.'),
   sol('Move to a lighter plan: price difference refunded, plan duration unchanged',L),
   sol('Stay Lite: keep account, progress and community, no live classes',N),
   sol('One-time offer on next renewal: exact % set by system rules, up to 25%. Only for members with no practice in the last 30 days or more.',L,25)]},
 {k:'reason',t:'5. Personal reasons',hero:'Hero: "Held for you": streak, level, journal, community',kids:[
   sub('Travelling',[sol('Complimentary 1:1 class at your destination hour',N,15),pause,sol('Stay Lite',N)]),
   sub('Family or health',[pause,sol('Gift remaining time to someone',N),sol('Stay Lite',N)]),
   sub('Busy period',[pause,sol('Lighter plan',L),sol('10-day restart',N,10)])]},
 {k:'reason',t:'6. Something else',hero:'Hero: free text, logged',kids:[
   sub('Free text',[pause,sol('Stay Lite',N),sol('Talk to support',L)])]},
 {k:'exit',t:'If they still cancel',hero:'Two honest endings, then a way back',kids:[
   sub('How to end',[
     sol('Stop auto-renew, keep access to the end date (default)',L),
     sol('End access today',L,null,'Within 7 days and nothing attended or booked: refund of 90%. Otherwise no refund.')]),
   sub('The way back',[
     sol('Your Shvasa chapter: recap card of classes, hours, best streak',N),
     sol('Comeback offer: bonus credits or welcome-back offer',N,20,'Held for returning; applies to the first plan'),
     sol('Note to future you, sent on a day they choose',N),
     sol('Reminders at 2 weeks, 1 month or 3 months, only if chosen',N),
     sol('One-tap return with progress restored',N)])]},
 {k:'rule',t:'Rules that apply everywhere',kids:[
   note('Discount ceiling: 25%. Total never above 25% in one plan period. Refunds are not discounts.'),
   note('Refund policy: within 7 days of renewal, 10% third-party fee. Does not apply once a class is attended or booked on the renewed plan.'),
   note('Downgrade to a lighter plan (retention only): the price difference is refunded and the plan duration stays the same. Unused time is never refunded.'),
   note('Inactive members are not given class recommendations as the main fix.'),
   note('"Continue to cancel" and "Talk to support" are always visible. Everything is self-serve.'),
   note('Every step is logged: reason, sub-reason, offers shown, offer accepted, how they ended.')]}
 ]};
