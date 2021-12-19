# Group

## Constructor

```js
new Group(groupName: String, scene: Scene);
```

## Properties

> #### .scene: Scene

The scene's svg that the group belongs to.

> #### .svg: d3 Selector

d3 selector of the group's svg tag.

> #### .name: String

Name of the group.

> #### .cubicons: Array

Array of cubicons in the group.

> #### .animations: Array

Array of animations played in the group.

> #### .queueElapsed: Number

The time (in milliseconds) elapsed of an animation queue since the first animation of the queue was played.

> #### .groupElapsed: Number

The time (in milliseconds) elapsed since this group's first animation was played.

> #### .sleepTime: Number

Sleep time (in milliseconds) before the first animation in a queue is played.

## Methods

> #### .play(anims)

Play all the animation in a queue asynchronously.

##### Parameters

> > anims: Array

The animation queue to play.

> #### .sleep(milliseconds)

Sleep this group.

##### Parameters

> > milliseconds: Number

Sleep time for this group.

> #### .add(cubicon)

Add a cubicon to this group. This method should not be called directly in the code.

##### Parameters

> > cubicon: Cubicon

A cubicon to add.

> #### .remove(cubicon)

Remove a cubicon in this group.

##### Parameters

> > cubicon: Cubicon

A cubicon to remove.

> #### .destroy(delay)

Remove this group.

##### Parameters

> > delay: Number

Delay time (in milliseconds) before this group is removed since it was created.
