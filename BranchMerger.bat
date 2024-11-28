@echo off
echo -- Branch merger --
echo
echo This is a CMD file for merging branches
echo
echo first input is your input branch
echo second input is your output branch ( often master )

SET inputBranch = %1 
SET outputBranch = %2

    echo Press any key to continue . . . 
    echo Press CTRL c  to  quit . . . 
    
    pause

    echo checking out %inputBranch%
    git checkout %inputBranch%

    echo commit to %inputBranch%
    git add .
    git commit -m "commit because %outputBranch%"

    echo pushing to %inputBranch%
    git push origin %inputBranch%

    echo checking out %outputBranch%
    git checkout %outputBranch%

    echo pulling from %outputBranch%
    git pull origin %outputBranch%

    echo merging %inputBranch% with %outputBranch% 
    git merge %inputBranch%

    echo commit to %outputBranch% after the merge from %inputBranch%
    git add .
    git commit -m "commit from %inputBranch%"

    echo pushing to %outputBranch%
    git push origin %outputBranch%

    echo merging %outputBranch% with %inputBranch% 
    git checkout %inputBranch%
    git merge %outputBranch%
    echo "done"

                                             

