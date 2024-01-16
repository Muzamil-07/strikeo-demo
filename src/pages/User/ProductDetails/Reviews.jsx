import { Accordion, Avatar, Badge, Rating } from "flowbite-react";

export default function Reviews() {
  return (
    <Accordion className="border-none">
      <Accordion.Panel>
        <Accordion.Title className="flex justify-center text-lg text-white py-3">
          Reviews
        </Accordion.Title>
        <Accordion.Content>
          <div className="flex">
            <div>
              <Avatar rounded />
            </div>
            <div className="pl-3">
              <div>
                <small>John Doe </small>
                <Badge className="inline opacity-40 ml-1">2 minutes ago</Badge>
              </div>

              <p style={{ fontSize: 14 }}>Good product</p>
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
              </Rating>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
