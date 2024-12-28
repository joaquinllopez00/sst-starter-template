// import * as ec2 from "aws-cdk-lib/aws-ec2";
// // import * as transfer from "aws-cdk-lib/aws-transfer";
// import { Tags } from "aws-cdk-lib/core";
// import { StackContext, RDS } from "sst/constructs";

// export function VPCStack({ app, stack }: StackContext) {
//   let vpc: ec2.IVpc | null = null;
//   // TODO: Handle
//   // // Alternatively use an existing VPC
//   // const vpc = ec2.Vpc.fromLookup(stack, 'VPC', { ... });

//   if (app.stage === "prod") {
//     // Create a VPC
//     vpc = new ec2.Vpc(stack, "VPC", {
//       ipAddresses: ec2.IpAddresses.cidr("10.0.0.0/18"),
//       vpcName: "",
//     });
//     Tags.of(vpc).add("Name", "prod-vpc");
//   } else {
//     vpc = ec2.Vpc.fromLookup(stack, "VPC", {
//       tags: {
//         Name: "prod-vpc",
//       },
//     });
//   }

//   if (vpc) {
//     // const keyPair = new ec2.CfnKeyPair(stack, "EC2-KeyPair", {
//     //   keyName: "ec2-keypair",
//     // });

//     // const ftpServer = new transfer.CfnServer(stack, "FtpServer", {
//     //   endpointType: "VPC",
//     //   identityProviderType: "SERVICE_MANAGED",
//     //   protocols: ["SFTP"],
//     // });

//     // // Create an FTP user with a password
//     // new transfer.CfnUser(stack, "FtpUser", {
//     //   serverId: ftpServer.ref,
//     //   userName: "user1",
//     //   homeDirectory: "/home/user1",
//     //   role: "arn:aws:iam::123456789012:role/MyRole", // Replace with your IAM role ARN
//     //   // ... other user configurations ...
//     // });

//     // // Modify the security group to allow FTP access
//     // const ftpSecurityGroup = new ec2.SecurityGroup(stack, "FtpSecGroup", {
//     //   vpc,
//     //   description: "Allow FTP access",
//     //   allowAllOutbound: true,
//     // });

//     // ftpSecurityGroup.addIngressRule(
//     //   ec2.Peer.anyIpv4(),
//     //   ec2.Port.tcp(21),
//     //   "Allow FTP access"
//     // );

//     const securityGroup = new ec2.SecurityGroup(stack, "SecGroup", {
//       vpc,
//       description: "Allow SSH access",
//       allowAllOutbound: true,
//     });

//     securityGroup.addIngressRule(
//       ec2.Peer.anyIpv4(),
//       ec2.Port.tcp(22),
//       "Allow SSH access from any IP"
//     );

//     const instance = new ec2.Instance(stack, "EC2", {
//       vpc,
//       securityGroup,
//       instanceType: ec2.InstanceType.of(
//         ec2.InstanceClass.C5AD,
//         ec2.InstanceSize.LARGE
//       ),
//       vpcSubnets: {
//         subnetType: ec2.SubnetType.PUBLIC,
//       },
//       keyName: "ec2-key-pair",
//       associatePublicIpAddress: true,
//       machineImage: ec2.MachineImage.latestAmazonLinux(),
//     });

//     const rds = new RDS(stack, "RDS", {
//       engine: "mysql5.7",
//       defaultDatabaseName: "rdstest",
//       cdk: {
//         cluster: {
//           vpc,
//           vpcSubnets: {
//             subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
//           },
//         },
//       },
//     });

//     const rdsCluster = rds.cdk.cluster;

//     rdsCluster.connections.allowFrom(
//       securityGroup,
//       ec2.Port.tcp(3306),
//       "Allow MySQL access from EC2 instance"
//     );

//     // Add the VPC to stack output
//     stack.addOutputs({
//       VPC: vpc.vpcId,
//       Instance: instance.instanceId,
//       rds: rds.id,
//       //   keyPair: keyPair.keyName,
//     });
//   }
// }
