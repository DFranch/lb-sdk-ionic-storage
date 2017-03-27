/* tslint:disable */
import {
  User
} from '../index';

declare var Object: any;
export interface ProjectInterface {
  "name"?: any;
  "balance"?: any;
  "id"?: any;
  "ownerId"?: any;
  user?: User;
}

export class Project implements ProjectInterface {
  "name": any;
  "balance": any;
  "id": any;
  "ownerId": any;
  user: User;
  constructor(data?: ProjectInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Project`.
   */
  public static getModelName() {
    return "Project";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Project for dynamic purposes.
  **/
  public static factory(data: ProjectInterface): Project{
    return new Project(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Project',
      plural: 'Projects',
      properties: {
        "name": {
          name: 'name',
          type: 'any'
        },
        "balance": {
          name: 'balance',
          type: 'any'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "ownerId": {
          name: 'ownerId',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'User',
          model: 'User'
        },
      }
    }
  }
}
