# Redux ECS

A Entity Component System based on Redux.

The goal of this librairy to detach the ECS pattern from its video game background.

## ECS VS REDUX

ECS and REDUX are two very similar patterns:

- System and Reducers are the same, they are pure functions that process states.
- Component and the store are similar concept. The components only hold the states. The store add the subtility of being unique.
- The entity is the concept that do not match in redux. As redux handles only one store, the entities stored in it are abstract to it. Redux do not care on how you organize your state.
- The Redux actions are not part of the ECS pattern but fit well.

## Why using REDUX?

The goal of this librairy is to allow to easily integrate the ECS pattern to an existing app. One advantage of using Redux is that you can use the ECS pattern along your normal code without any disription. And you can easily plug your ECS implementation to the existing events.

## Is it performant?

One of the principal drawback of the ECS model is the (recursive) iteration on entities/components for each System.

In order to mitigate this, redux-ecs has two property in the store.

- TypesTree is a tree that contains the entity Id and which component type are related to them.
- ComponentsTree is a tree that contains the entity Id and the values of each components relared to them.

Then the SystemReducer will use selectors on the TypesTree to determine which systems it should call on which components in the ComponentsTree. As selector are memoized, the calculation is only performed when TypesTree is modified, so when an entity is created, deleted or when a components is added or removed.

@todo: If memoization is too slow due to too much new elements, the component reducer could manage to map the components itself in a dedicated state property.
