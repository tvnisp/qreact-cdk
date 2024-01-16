#!/usr/bin/env node
import 'source-map-support/register';
import {App} from 'aws-cdk-lib';
import {DeployReactAppStack} from '../lib/deploy-react-app-stack';

const app = new App();
new DeployReactAppStack(app, 'InfraStack', {});
