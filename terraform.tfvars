terragrunt = {
  terraform {
    source = "git@github.com:Advanon/advanon-infrastructure.git//terraform/modules/cicd/serverless?ref=fix-arn-cb"
  }
}

project_name = "aws-access-utils"
pr_build_only = "true"
