# Chronological Prompt and Decision Record

## Scope and limitations

This is a faithful chronological research record reconstructed from the user
instructions and files available in the working conversation. It records every
material request, correction, and technical decision visible in that record.
It does not claim access to hidden model reasoning or unavailable internal
image-generation prompts.

The supplied image files and four available edit targets are preserved under
`assets/`. The exact current copy and unresolved conflicts are consolidated in
`CURRENT-SPEC.md`.

## 1. Initial flyer request

The requested flyer used a dark-gray or neutral border. The City Hall Plaza
back entrance to Trinity United Methodist Church was to be the main visual
anchor. A cropped First Step Beginners laser-engraved podium sign was to act as
the header, and the entrance/bus/parking guide was to form the substantial
lower “kicker” section.

The original header included the group name, “A BRAND NEW AA GROUP IN THE HEART
OF DURHAM,” “TUESDAYS 11am,” “(starting Tuesday September 8th),” and the Trinity
UMC/Downtown Durham location.

The original middle copy explained that the meeting was intended for old-time
members and newcomers, was located by the Open Table Ministry Free Store and
Resource Weekly Event, hoped to welcome people experiencing housing insecurity
and homelessness, described attendance as an opportunity for service, and
listed the monthly Step One through Step Four rotation plus a fifth-Tuesday
speaker format.

The original footer requested “RECOVERY, UNITY, AND SERVICE,” the Trinity UMC
address, and contacts for Greg W and Paul G.

## 2. First crop and legibility revision

The sign crop was to be tightened around only the lettering and logo, with the
text leveled horizontally. Separate white “THE FIRST STEP BEGINNERS” text was to
be removed because the sign already stated the name. The sign was to move lower
into the space freed by that removal.

The flyer had to print on an 8.5-by-11-inch sheet. The detailed copy needed to
be larger even if it overlapped the door photograph.

## 3. Sign-left and guide restructuring revision

The First Step Beginners sign was moved to the upper left so it would not cover
the door. Image-on-image overlay remained acceptable.

The service-work paragraph beginning “This AA group is an opportunity…” was
removed to make the remaining message larger.

The guide was to retain its overall footprint while making the black detail
text under BUS, MAIN ENTRANCE, ACCESSIBLE ENTRANCE, and PARKING clearer. Gray
divider lines could be removed. The right column could extend toward the
contact area, and that area could move lower and right.

The guide title was shortened to “Entrance and Parking Guide” and moved beneath
the BUS section. The intended sequence became BUS, title, MAIN ENTRANCE,
ACCESSIBLE ENTRANCE, and PARKING.

## 4. Sign scale and schedule-position revision

The sign needed to be at least twice as wide and tall as the smaller treatment.
It no longer needed to look like a separate church sign. The schedule text
positioning was liked, but “TUESDAYS 11am” was to be reduced slightly and moved
slightly downward and rightward relative to the door handles.

## 5. Major middle-copy reduction

The middle section was reduced to two paragraphs: one paragraph about the
meeting, Open Table proximity, and outreach to people experiencing housing
insecurity or homelessness; and one sentence stating that the group would
discuss the first four steps using official AA literature.

The freed space was to enlarge the map and guide for better legibility.

## 6. Header, affiliation, guide-contact, and footer revision

The following header lines were removed:

- “A BRAND NEW AA GROUP IN THE HEART OF DURHAM”
- “(starting Tuesday September 8th)”

The middle copy was changed so that the first sentence ended after “Downtown
Durham, NC.” The next sentence began “We are unaffiliated with but intentionally
located near The Open Table …”

The guide was to remove “Call or text …” through the names and phone numbers.
“RECOVERY, UNITY, AND SERVICE” was removed from the footer and could instead be
associated with the AA logo in the header. Text sizes were to be refactored
using the newly available space.

## 7. Punctuation corrections

A comma was required after “purposely”. A second correction required a comma
after “unaffiliated with”. The approved construction therefore became:

> We are unaffiliated with, but intentionally located near …

and:

> This was done purposely, as we hope …

## 8. Parking bullets

Under PARKING, one bullet was required before “Lot #8” and another before
“Church St. Garage.”

## 9. Research and portability goal

The project expanded from a one-off flyer edit into a recorded learning
exercise. The desired environment was a browser-accessible GitHub command line,
usable from multiple devices, with Git history, Markdown research notes, a
general agentic method, and Codex connected through the user’s ChatGPT Plus
account.

The desired outcome was to publish the process and findings on the user’s
GitHub and develop a real, inspectable AI-research practice.

## 10. Access clarification

The key distinction established was:

- ChatGPT Plus does not include general OpenAI API billing for arbitrary custom
  API programs.
- Interactive Codex CLI use can authenticate with the ChatGPT Plus account and
  does not require separate API billing.
- In a remote Codespaces terminal, device-code login is the preferred method.
- Separate API credentials are principally relevant to direct API programs or
  unattended automation.

## 11. Session-recording decision

Authentication should happen before terminal recording. The safe sequence is:

1. Install Codex.
2. Run `codex login --device-auth`.
3. Run `codex login status`.
4. Start a terminal transcript with `./scripts/start-session.sh`.
5. Run Codex from inside the recorded shell.
6. End Codex, end the recorded shell, review the raw transcript, and publish
   only a redacted Markdown session report.

Raw logs are deliberately excluded from Git because a terminal can display
tokens, personal paths, private text, or other sensitive material. Git commits,
reviewed reports, and preserved assets form the publishable research record.

## Technical events

- Earlier attempts to read some selected local image paths briefly reported
  missing files.
- The three original uploads and four edit-target PNGs later became available
  and are included in this repository.
- The last image-edit instruction identified
  `image-edit-target-5eefa9c521166b2d.png` as its exact edit source. Because the
  copy requirements continued changing, no raster draft should override the
  written requirements in `CURRENT-SPEC.md`.

